const USERS_SHEET_NAME = "Users";
const CAMPAIGNS_SHEET_NAME = "Campaigns";

// Run this function ONCE from the editor to create the sheets & headers automatically
function setup() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  if (!ss.getSheetByName(USERS_SHEET_NAME)) {
    const sheet = ss.insertSheet(USERS_SHEET_NAME);
    sheet.appendRow(["id", "name", "email", "category", "status"]);
  }
  
  if (!ss.getSheetByName(CAMPAIGNS_SHEET_NAME)) {
    const sheet = ss.insertSheet(CAMPAIGNS_SHEET_NAME);
    sheet.appendRow(["id", "email", "subject", "sentAt", "opened"]);
  }
}

// Handles GET requests
function doGet(e) {
  const action = e.parameter.action;
  
  if (action === "getUsers") return respond(getUsers());
  if (action === "getCampaigns") return respond(getCampaigns());
  
  return respond({ error: "Invalid GET action" }, 400);
}

// Handles POST requests
function doPost(e) {
  let body;
  try {
    body = JSON.parse(e.postData.contents);
  } catch (error) {
    return respond({ error: "Invalid JSON format" }, 400);
  }
  
  const action = body.action;
  
  // --- ADDED SEND EMAIL ACTION ---
  if (action === "sendEmail") return respond(sendMailBridge(body.data));
  
  if (action === "addUser") return respond(addUser(body.data));
  if (action === "updateUser") return respond(updateUser(body.id, body.data));
  if (action === "deleteUser") return respond(deleteUser(body.id));
  if (action === "addCampaigns") return respond(addCampaigns(body.data));
  if (action === "updateCampaignOpened") return respond(updateCampaignOpened(body.id));
  
  return respond({ error: "Invalid POST action" }, 400);
}

// Helper to format responses
function respond(data, statusCode = 200) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

// ========================
// MAIL BRIDGE LOGIC
// ========================

/**
 * MANUAL ACTION REQUIRED:
 * If you get "Permission denied", you MUST:
 * 1. Open this script in the Google Apps Script Editor.
 * 2. Select the 'triggerAuthorization' function in the toolbar.
 * 3. Click 'Run'.
 * 4. A popup will appear asking for permissions. Click 'Review Permissions', select your account, 
 *    click 'Advanced' -> 'Go to [Project Name] (unsafe)', and then click 'Allow'.
 * 5. After authorize, you MUST 'Deploy > New Deployment' (or 'Manage Deployments > Edit > New Version')
 *    to make the new permissions active for the Web App URL.
 */
function triggerAuthorization() {
  // This function does nothing but triggers the Gmail authorization popup when run manually
  GmailApp.getAliases();
  Logger.log("Authorization successful!");
}

function sendMailBridge(data) {
  try {
    // Basic options
    const options = {
      htmlBody: data.html,
      name: "Ace Mail Team"
    };

    // If a specific sender is requested (must be a valid alias of the account)
    if (data.from) {
      options.from = data.from;
    }

    // This uses your Google account's permission to send the email
    GmailApp.sendEmail(data.to, data.subject, "", options);
    
    return { success: true };
  } catch (err) {
    return { success: false, error: err.toString() };
  }
}

// ========================
// USERS LOGIC
// ========================
function getUsers() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(USERS_SHEET_NAME);
  const data = sheet.getDataRange().getValues();
  const headers = data[0];
  const users = [];
  
  for (let i = 1; i < data.length; i++) {
    const user = {};
    for (let j = 0; j < headers.length; j++) {
      user[headers[j]] = data[i][j];
    }
    users.push(user);
  }
  return users.reverse();
}

function addUser(userData) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(USERS_SHEET_NAME);
  sheet.appendRow([
    userData.id, 
    userData.name, 
    userData.email, 
    userData.category, 
    userData.status || "Active"
  ]);
  return { success: true, user: userData };
}

function updateUser(id, userData) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(USERS_SHEET_NAME);
  const data = sheet.getDataRange().getValues();
  
  for (let i = 1; i < data.length; i++) {
    if (data[i][0].toString() === id.toString()) {
      if (userData.name !== undefined) sheet.getRange(i + 1, 2).setValue(userData.name);
      if (userData.email !== undefined) sheet.getRange(i + 1, 3).setValue(userData.email);
      if (userData.category !== undefined) sheet.getRange(i + 1, 4).setValue(userData.category);
      if (userData.status !== undefined) sheet.getRange(i + 1, 5).setValue(userData.status);
      return { success: true };
    }
  }
  return { error: "User not found" };
}

function deleteUser(id) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(USERS_SHEET_NAME);
  const data = sheet.getDataRange().getValues();
  
  for (let i = 1; i < data.length; i++) {
    if (data[i][0].toString() === id.toString()) {
      sheet.deleteRow(i + 1);
      return { success: true };
    }
  }
  return { error: "User not found" };
}

// ========================
// CAMPAIGNS LOGIC
// ========================
function getCampaigns() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CAMPAIGNS_SHEET_NAME);
  const data = sheet.getDataRange().getValues();
  const headers = data[0];
  const campaigns = [];
  
  for (let i = 1; i < data.length; i++) {
    const campaign = {};
    for (let j = 0; j < headers.length; j++) {
      campaign[headers[j]] = data[i][j];
    }
    campaign.opened = campaign.opened === true || campaign.opened === "true";
    campaigns.push(campaign);
  }
  return campaigns;
}

function addCampaigns(campaignsData) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CAMPAIGNS_SHEET_NAME);
  if (!campaignsData || campaignsData.length === 0) return { success: true, count: 0 };
  
  const rows = campaignsData.map(c => [
    c.id,
    c.email,
    c.subject,
    c.sentAt,
    c.opened ? true : false
  ]);
  
  sheet.getRange(sheet.getLastRow() + 1, 1, rows.length, rows[0].length).setValues(rows);
  return { success: true, count: rows.length };
}

function updateCampaignOpened(id) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CAMPAIGNS_SHEET_NAME);
  const data = sheet.getDataRange().getValues();
  
  for (let i = 1; i < data.length; i++) {
    if (data[i][0].toString() === id.toString()) {
      sheet.getRange(i + 1, 5).setValue(true);
      return { success: true };
    }
  }
  return { error: "Campaign not found" };
}
