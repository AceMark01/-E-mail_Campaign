import React, { useState, useEffect, useRef } from "react";
import { usePopup } from "../context/PopupContext";
import {
  Send, Users, LayoutDashboard, LogOut, Trash2, History, Mail, BarChart3, Menu, Edit2, CheckCircle, X, AlertTriangle, ArrowLeft, Sparkles, RefreshCcw
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser, updateUser } from "../store/slices/audienceSlice";

import { fetchAnalytics } from "../store/slices/analyticsSlice";
import TemplatesTab from "../components/TemplatesTab";
import AnalyticsTab from "../components/AnalyticsTab";
import CampaignTab from "../components/campaign/CampaignTab";
import AudienceTab from "../components/audience/AudienceTab";
import { sendEmailDirect, googleScriptRequest } from "../services/googleService";


const categories = ["All", "Intern Applied", "Client", "Employee", "Lead", "Partner"];
const ITEMS_PER_PAGE = 500;

export default function Dashboard({ onLogout }) {
  const popup = usePopup();
  const dispatch = useDispatch();

  // --- REDUX STATE ---
  const { users, loading: usersLoading } = useSelector((state) => state.audience);
  const { stats } = useSelector((state) => state.analytics);

  // --- LOCAL UI STATE ---
  const [selectedUserIds, setSelectedUserIds] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [previousTab, setPreviousTab] = useState("dashboard");

  // Form State
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // Status State
  const [sendStatus, setSendStatus] = useState("idle");
  const [lastResultDetails, setLastResultDetails] = useState("");
  const [sendingToId, setSendingToId] = useState(null);

  // Add User State
  const [isAddingUser, setIsAddingUser] = useState(false);
  const [newUserName, setNewUserName] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");

  // Template State
  const [activeTemplateData, setActiveTemplateData] = useState(null);

  // Edit User State
  const [editingUserId, setEditingUserId] = useState(null);
  const [editFormData, setEditFormData] = useState({ name: "", email: "" });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const fileInputRef = useRef(null);

  // Load Data via Redux
  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchAnalytics());
  }, [dispatch]);

  // Reset campaign when navigating away from compose tab
  useEffect(() => {
    if (activeTab !== "compose" && activeTab !== "templates") {
      setSubject("");
      setMessage("");
      setSelectedUserIds([]);
      setSendStatus("idle");
      setLastResultDetails("");
      setActiveTemplateData(null);
      setSearchTerm("");
    }
  }, [activeTab]);

  const switchTab = (newTab) => {
    const mainTabs = ["dashboard", "campaigns", "audience"];
    if (mainTabs.includes(activeTab)) {
      setPreviousTab(activeTab);
    }
    setActiveTab(newTab);
  };

  const insertTextAtCursor = (text) => {
    setMessage(prev => prev + text);
  };

  const triggerImageUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imgTag = `<br/><img src="${reader.result}" alt="Uploaded Image" style="max-width: 100%; border-radius: 8px; margin: 10px 0; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" /><br/>`;
        insertTextAtCursor(imgTag);
      };
      reader.readAsDataURL(file);
    }
    e.target.value = null;
  };

  const handleInsertLink = () => {
    const url = prompt("Enter Link URL:");
    if (url) insertTextAtCursor(`<a href="${url}" target="_blank" style="color: #0ea5e9; font-weight: bold; text-decoration: underline;">Click Here</a>`);
  };

  const startTargetedCampaign = (emails) => {
    if (!emails || emails.length === 0) {
      popup.error("No recipients found for this group.", "Targeting Failed");
      return;
    }
    const targetedUsers = users.filter(u => emails.includes(u.email));
    if (targetedUsers.length === 0) {
      popup.error("The selected recipients are no longer in your database.", "Users Not Found");
      return;
    }
    setSelectedUserIds(targetedUsers.map(u => u.id));
    switchTab("templates");
    popup.success(`Found ${targetedUsers.length} system users to target!`, "Audience Ready");
  };

  const sendCampaign = async (targetUsers, typeDescription) => {
    if (!subject || !message) {
      popup.error("Subject and Message required!", "Missing Fields");
      return;
    }

    const proceedWithSend = async () => {
      if (targetUsers.length > 1) setSendStatus("sending");
      else setSendingToId(targetUsers[0].id);

      popup.loading(`Preparing to send to ${targetUsers.length} recipient(s)...`, "Sending Campaign");

      try {
        const hasFooter = message.includes('id="ace-mail-footer"');
        const htmlBody = hasFooter ? message : `
        ${message}
        <table id="ace-mail-footer" border="0" cellPadding="0" cellSpacing="0" width="100%" style="background-color: #0f172a; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif">
            <tbody>
                <tr>
                    <td style="padding: 50px 30px">
                        <table border="0" cellPadding="0" cellSpacing="0" width="100%" style="max-width: 600px; margin: 0 auto">
                            <tbody>
                                <tr>
                                    <td>
                                        <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                            <tbody>
                                                <tr>
                                                    <td valign="top" width="40%" style="padding-right: 20px">
                                                        <div style="margin-bottom: 15px">
                                                            <div style="display: inline-block; background-color: #0c659f; padding: 8px; border-radius: 8px; margin-bottom: 10px">
                                                                <span style="font-size: 20px; color: #ffffff; font-weight: bold">⚡</span>
                                                            </div>
                                                            <span style="font-size: 20px; font-weight: bold; color: #ffffff; margin-left: 8px">Botivate</span>
                                                        </div>
                                                        <p style="font-size: 13px; line-height: 1.6; color: #94a3b8; margin: 0 0 20px 0">Botivate: Automate. Manage. Scale.</p>
                                                        <p style="font-size: 13px; line-height: 1.6; color: #94a3b8; margin: 0 0 20px 0">Transforming businesses through cutting-edge AI automation solutions.</p>
                                                        <div style="margin-top: 20px">
                                                            <p style="margin: 0 0 8px 0; font-size: 13px; color: #94a3b8"><span style="color: #0c659f">✉</span> info@acemail.in</p>
                                                            <p style="margin: 0 0 8px 0; font-size: 13px; color: #94a3b8"><span style="color: #0c659f">📞</span> +919993023243</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                {/* POWERED BY ROW */}
                <tr>
                  <td style="padding: 8px; background-color: #ffffff; border-top: 1px solid #f1f5f9; text-align: center;">
                    <p style="margin: 0; color: #94a3b8; font-size: 10px; font-weight: bold; letter-spacing: 2px; text-transform: uppercase;">
                      POWERED BY BOTIVATE
                    </p>
                  </td>
                </tr>
            </tbody>
        </table>`;

        let successCount = 0;
        let failCount = 0;
        let processedAt = new Date().toISOString();
        let records = [];

        for (const user of targetUsers) {
            try {
                // Send email directly to Google Apps Script
                const result = await sendEmailDirect(user.email, subject, htmlBody, null);
                if (result && result.success) {
                    records.push({
                        id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`,
                        email: user.email,
                        subject,
                        sentAt: processedAt,
                        opened: false
                    });
                    successCount++;
                } else {
                    failCount++;
                }
            } catch (err) {
                console.error("Failed to send to", user.email, err);
                failCount++;
            }
        }

        if (records.length > 0) {
            await googleScriptRequest('addCampaigns', records);
        }

        if (successCount > 0) {
          setLastResultDetails(`Successfully sent to ${successCount} recipients.`);
          setSendStatus("success");
          popup.success(`Successfully sent emails to ${successCount} recipients!`, "Campaign Launched");
          dispatch(fetchAnalytics()); // Refresh stats after launch
        } else {
          throw new Error("Failed to send emails. Check configuration.");
        }
      } catch (error) {
        console.error("Mail Error:", error);
        setSendStatus("error");
        popup.error(error.message, "Delivery Failed");
      } finally {
        setSendingToId(null);
      }
    };

    popup.confirm(
      `Are you sure you want to send this campaign to ${targetUsers.length} user(s)?`,
      proceedWithSend,
      "Confirm Launch",
      { autoClose: false }
    );
  };

  const handleAddUser = () => {
    if (!newUserEmail.includes("@")) { popup.error("Please enter a valid email address.", "Invalid Email"); return; }
    const userData = { name: newUserName || "New", email: newUserEmail, category: activeCategory !== "All" ? activeCategory : "Client" };
    dispatch(addUser(userData)).then(() => {
      setNewUserName("");
      setNewUserEmail("");
      setIsAddingUser(false);
      setCurrentPage(1);
    });
  };

  const filteredUsers = users.filter((u) => {
    const matchesCategory = activeCategory === "All" || u.category === activeCategory;
    const matchesSearch = u.email?.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          u.name?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);
  const currentUsers = filteredUsers.slice((currentPage - 1) * ITEMS_PER_PAGE, ((currentPage - 1) * ITEMS_PER_PAGE) + ITEMS_PER_PAGE);

  const toggleSelectUser = (id) => setSelectedUserIds(prev => prev.includes(id) ? prev.filter(uid => uid !== id) : [...prev, id]);
  const toggleSelectAllPage = () => {
    const pageIds = currentUsers.map(u => u.id);
    const allSelected = pageIds.every(id => selectedUserIds.includes(id));
    setSelectedUserIds(prev => allSelected ? prev.filter(id => !pageIds.includes(id)) : [...new Set([...prev, ...pageIds])]);
  };

  const startEditingUser = (user) => {
    setEditingUserId(user.id);
    setEditFormData({ name: user.name, email: user.email });
  };

  const handleSaveUser = () => {
    dispatch(updateUser({ id: editingUserId, ...editFormData })).then(() => {
      setEditingUserId(null);
    });
  };


  return (
    <div className="flex h-screen overflow-hidden bg-[#F3F4F6] font-sans text-gray-900">
      <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileChange} />

      {/* MOBILE HEADER */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-100 p-4 z-40 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-2">
          <img src="/src/assets/acelogo.png" alt="Ace Mail" className="h-8 w-auto" />
          <span className="text-xl font-bold tracking-tight text-gray-900">Ace Mail</span>
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-gray-600 hover:bg-gray-100 rounded-xl transition-colors">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE BACKDROP */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* SIDEBAR */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-white/90 backdrop-blur-xl border-r border-gray-100 flex flex-col justify-between transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative md:inset-auto shadow-2xl md:shadow-none`}>
        <div className="flex flex-col h-full">
          <div className="p-8 mb-4">
            <div className="flex items-center gap-4">
              <img src="/src/assets/acelogo.png" alt="Ace Mail" className="h-12 w-auto" />
              <div>
                <span className="text-2xl font-black text-gray-900 tracking-tight block">Ace Mail</span>
                <span className="text-xs font-semibold text-sky-500 uppercase tracking-wider">Pro Dashboard</span>
              </div>
            </div>
          </div>

          <div className="px-6 flex-1">
            <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.3em] mb-6 px-3">System Navigation</p>
            <nav className="space-y-2">
              <SidebarItem icon={<LayoutDashboard size={20} />} label="System Overview" active={activeTab === 'dashboard'} onClick={() => { switchTab('dashboard'); setIsMobileMenuOpen(false); }} />
              <SidebarItem icon={<Users size={20} />} label="Audience Manager" active={activeTab === 'audience'} onClick={() => { switchTab('audience'); setIsMobileMenuOpen(false); }} />
              <SidebarItem icon={<History size={20} />} label="Transmission Logs" active={activeTab === 'campaigns'} onClick={() => { switchTab('campaigns'); setIsMobileMenuOpen(false); }} />
              <SidebarItem icon={<Mail size={20} />} label="Campaign Studio" active={activeTab === 'templates'} onClick={() => { switchTab('templates'); setIsMobileMenuOpen(false); }} />
            </nav>
          </div>

          <div className="p-6 mt-auto">
            <div className="bg-sky-50/50 rounded-2xl p-4 border border-sky-100/50 mb-4 transition-all hover:bg-sky-50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-sky-200 flex items-center justify-center text-sky-700 font-bold border-2 border-white shadow-sm">
                  AD
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 leading-none mb-1">Admin Demo</p>
                  <p className="text-xs text-gray-500 font-medium">Standard Plan</p>
                </div>
              </div>
              <button
                onClick={onLogout}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white text-gray-700 text-sm font-bold border border-gray-200 hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-all active:scale-95 shadow-sm"
              >
                <LogOut size={16} /> Sign Out
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col p-4 md:p-10 mt-16 md:mt-0 overflow-hidden relative">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-50/50 rounded-2xl blur-[120px] -z-10 pointer-events-none"></div>

        <header className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6 shrink-0 mt-6 md:mt-0">
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight capitalize">
              {activeTab === 'dashboard' ? 'Overview' : activeTab}
            </h1>
            <p className="text-gray-500 font-medium text-sm md:text-base mt-2">
              {activeTab === 'dashboard' && "Welcome back! Here's what's happening today."}
              {activeTab === 'campaigns' && "Manage and track your delivery performance."}
              {activeTab === 'audience' && "Organize and segment your contact lists."}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 bg-emerald-50 px-4 py-2.5 rounded-full border border-emerald-200 shadow-sm transition-all hover:shadow-md">
              <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
              <span className="text-xs font-bold text-emerald-700 tracking-wide">System Online</span>
            </div>
            <button onClick={() => switchTab('templates')} className="w-full md:w-auto bg-gradient-to-r from-sky-600 to-indigo-600 text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-sky-200 hover:shadow-xl hover:shadow-sky-300 transition-all hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 outline-none">
              <Sparkles size={18} /> Launch Campaign
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto no-scrollbar pb-24">
          {activeTab === 'dashboard' && <AnalyticsTab setActiveTab={setActiveTab} startTargetedCampaign={startTargetedCampaign} />}

          {activeTab === 'audience' && (
            <div className="flex flex-col">
              <div className="mb-6 flex flex-col md:flex-row gap-4 bg-white/70 p-4 border border-gray-100 rounded-2xl shadow-sm shrink-0 backdrop-blur-xl">
                <div className="flex-1 flex overflow-x-auto pb-2 gap-2 scrollbar-thin scrollbar-thumb-gray-200">
                  {categories.map(c => (
                    <button
                      key={c}
                      onClick={() => { setActiveCategory(c); setCurrentPage(1); setSelectedUserIds([]); }}
                      className={`px-5 py-2.5 text-sm font-semibold rounded-xl transition-all whitespace-nowrap ${activeCategory === c ? 'bg-gray-900 text-white shadow-md' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'}`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
                <div className="relative w-full md:w-80">
                  <input 
                    type="text" 
                    placeholder="Search by name or email..." 
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white focus:border-sky-500 focus:ring-4 focus:ring-sky-50 outline-none transition-all"
                    value={searchTerm}
                    onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                  />
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Users size={18} />
                  </div>
                </div>
              </div>
              <AudienceTab users={users} currentUsers={currentUsers} selectedUserIds={selectedUserIds} setSelectedUserIds={setSelectedUserIds} toggleSelectUser={toggleSelectUser} toggleSelectAllPage={toggleSelectAllPage} handleSaveUser={handleSaveUser} isAddingUser={isAddingUser} setIsAddingUser={setIsAddingUser} handleAddUser={handleAddUser} newUserName={newUserName} setNewUserName={setNewUserName} newUserEmail={newUserEmail} setNewUserEmail={setNewUserEmail} activeCategory={activeCategory} setActiveCategory={setActiveCategory} categories={categories} editingUserId={editingUserId} setEditingUserId={setEditingUserId} editFormData={editFormData} setEditFormData={setEditFormData} sendCampaign={sendCampaign} sendingToId={sendingToId} startEditingUser={startEditingUser} switchTab={switchTab} currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
            </div>
          )}

          {activeTab === 'campaigns' && (
            <div className="space-y-6 relative">
              <div className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                <div><h2 className="text-lg font-bold text-gray-900">Live Transmission Logs</h2><p className="text-sm text-gray-500">Real-time delivery tracking</p></div>
                {stats.campaigns.length > 0 && (
                  <button onClick={() => { if (confirm("Clear live logs?")) { /* Logic to clear logs if needed */ } }} className="text-red-500 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2"><Trash2 size={14} /> Clear Log</button>
                )}
              </div>
              {stats.campaigns.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
                  <div className="bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"><History className="text-gray-400" size={32} /></div>
                  <h3 className="text-gray-900 font-bold">No transmissions yet</h3>
                </div>
              ) : (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-gray-50 text-gray-500 uppercase text-xs"><tr><th className="px-6 py-4 font-semibold">Recipient</th><th className="px-6 py-4 font-semibold">Subject</th><th className="px-6 py-4 font-semibold">Time</th><th className="px-6 py-4 font-semibold text-right">Status</th></tr></thead>
                    <tbody className="divide-y divide-gray-100">
                      {stats.campaigns.slice(0, 500).map((c) => (
                        <tr key={c.id} className="hover:bg-gray-50 transition-colors group">
                          <td className="px-6 py-4 font-bold text-gray-900">{c.email}</td>
                          <td className="px-6 py-4 text-gray-500">{c.subject}</td>
                          <td className="px-6 py-4 text-gray-400 whitespace-nowrap text-xs">{new Date(c.sentAt).toLocaleString()}</td>
                          <td className="px-6 py-4 text-right"><span className={`font-bold px-3 py-1 rounded-full text-[10px] uppercase ${c.opened ? 'bg-emerald-100 text-emerald-700' : 'bg-sky-100 text-sky-700'}`}>{c.opened ? 'Opened' : 'Delivered'}</span></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              <button onClick={() => switchTab('templates')} className="fixed bottom-24 right-8 w-16 h-16 bg-sky-600 text-white rounded-2xl shadow-2xl flex items-center justify-center hover:bg-sky-700 transition-all z-30 group"><Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></button>
            </div>
          )}

          {activeTab === 'compose' && (
            <div className="flex flex-col h-full animate-in fade-in slide-in-from-bottom-4">
              <div className="mb-6 flex items-center gap-4 shrink-0">
                <button onClick={() => setActiveTab('templates')} className="text-gray-600 hover:text-gray-900 flex items-center gap-2 text-sm font-semibold bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-sm transition-all hover:shadow-md hover:bg-gray-50"><ArrowLeft size={18} /> Back to Templates</button>
              </div>
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start h-full">
                <div className="xl:col-span-5"><CampaignTab users={users} onSendCampaign={sendCampaign} sendStatus={sendStatus} setSendStatus={setSendStatus} lastResultDetails={lastResultDetails} setSubject={setSubject} setMessage={setMessage} subject={subject} message={message} activeTemplateData={activeTemplateData} setActiveTemplateData={setActiveTemplateData} setActiveTab={setActiveTab} categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} selectedUserIds={selectedUserIds} setSelectedUserIds={setSelectedUserIds} filteredUsers={filteredUsers} setCurrentPage={setCurrentPage} triggerImageUpload={triggerImageUpload} handleInsertLink={handleInsertLink} insertTextAtCursor={insertTextAtCursor} /></div>
                <div className="xl:col-span-7 flex flex-col h-full">
                  <div className="bg-white p-4 rounded-none border border-sky-100 mb-4 bg-sky-50/30">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                      <h3 className="text-sm font-bold text-sky-700 flex items-center gap-2"><Users size={16} /> Select Recipients</h3>
                      <div className="relative w-full sm:w-64">
                        <input 
                          type="text" 
                          placeholder="Search identity..." 
                          className="w-full pl-8 pr-4 py-2 text-xs border border-sky-100 focus:border-sky-500 outline-none transition-all placeholder:text-sky-300"
                          value={searchTerm}
                          onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                        />
                        <div className="absolute left-2.5 top-1/2 -translate-y-1/2 text-sky-400">
                          <Users size={14} />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex overflow-x-auto pb-2 gap-2 no-scrollbar">
                      {categories.map(c => (
                        <button
                          key={c}
                          onClick={() => { setActiveCategory(c); setCurrentPage(1); setSelectedUserIds([]); }}
                          className={`px-4 py-2 text-[10px] font-black rounded-none transition-all whitespace-nowrap uppercase tracking-widest border ${activeCategory === c ? 'bg-sky-600 text-white border-sky-600 shadow-sm' : 'bg-white text-sky-400 border-sky-50 hover:border-sky-200'}`}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>
                  <AudienceTab users={users} currentUsers={currentUsers} selectedUserIds={selectedUserIds} setSelectedUserIds={setSelectedUserIds} toggleSelectUser={toggleSelectUser} toggleSelectAllPage={toggleSelectAllPage} handleSaveUser={handleSaveUser} isAddingUser={isAddingUser} setIsAddingUser={setIsAddingUser} handleAddUser={handleAddUser} newUserName={newUserName} setNewUserName={setNewUserName} newUserEmail={newUserEmail} setNewUserEmail={setNewUserEmail} activeCategory={activeCategory} setActiveCategory={setActiveCategory} categories={categories} editingUserId={editingUserId} setEditingUserId={setEditingUserId} editFormData={editFormData} setEditFormData={setEditFormData} sendCampaign={sendCampaign} sendingToId={sendingToId} startEditingUser={startEditingUser} currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'templates' && (
            <div className="flex flex-col h-full">
              <div className="mb-4 flex items-center gap-4 shrink-0"><button onClick={() => setActiveTab(previousTab)} className="text-gray-500 hover:text-gray-900 flex items-center gap-1 text-sm font-bold bg-white px-3 py-1.5 rounded-none border border-gray-100 shadow-sm transition-all hover:scale-105"><ArrowLeft size={16} /> Back</button></div>
              <TemplatesTab initialEditingState={activeTemplateData} onUseTemplate={(t) => { setSubject(t.subject); setMessage(t.message || ""); setActiveTemplateData(t.templateId ? { templateId: t.templateId, data: t.data } : null); switchTab("compose"); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />
            </div>
          )}
        </div>

        {/* --- STATIC SLIM FOOTER --- */}
        <div className="fixed bottom-0 left-0 w-full h-8 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50 border-t border-gray-100">
          <p className="text-gray-400 font-bold text-[10px] tracking-[0.3em] flex items-center gap-2 uppercase">
            <Sparkles size={12} className="text-sky-400/50" />
            Powered by Botivate
            <Sparkles size={12} className="text-pink-400/50" />
          </p>
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active, onClick }) {
  return (
    <div onClick={onClick} className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all ${active ? 'bg-sky-50 text-sky-700 font-bold shadow-sm border border-sky-100' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}>
      {icon} <span className="text-sm">{label}</span>
    </div>
  );
}

function SidebarItem({ icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 ${active
        ? 'bg-gradient-to-r from-sky-50 to-indigo-50 text-sky-700 shadow-sm border border-sky-100'
        : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}
    >
      <div className={`transition-transform duration-300 ${active ? 'scale-110 text-sky-600' : 'group-hover:scale-110'}`}>
        {icon}
      </div>
      <span className="tracking-wide">{label}</span>
      {active && <div className="ml-auto w-2 h-2 rounded-full bg-sky-500 shadow-[0_0_8px_rgba(14,165,233,0.8)] animate-pulse"></div>}
    </button>
  );
}
