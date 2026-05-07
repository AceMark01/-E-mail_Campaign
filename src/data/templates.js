// src/data/templates.js
export const PROMOTION_TEMPLATE = `
  <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
    <div style="background-color: #7c3aed; padding: 20px; text-align: center;">
      <h1 style="color: white; margin: 0;">Special Promotion!</h1>
    </div>
    <div style="padding: 20px; background-color: white;">
      <h2 style="color: #1f2937;">Hello there!</h2>
      <p style="color: #4b5563; line-height: 1.6;">We have a special offer just for you. Don't miss out on our latest updates and features.</p>
      <div style="text-align: center; margin: 30px 0;">
        <a href="#" style="background-color: #7c3aed; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">Get Started</a>
      </div>
      <p style="color: #9ca3af; font-size: 12px; text-align: center;">If you didn't request this, please ignore this email.</p>
    </div>
  </div>
`;

export const DEFAULT_TEMPLATES = [
    {
        id: 1,
        name: "Welcome Email",
        subject: "Welcome to the Family! 👋",
        message: "<h3>Welcome!</h3><p>We are thrilled to have you here.</p><p>We can't wait to show you what we've been working on.</p><br/><p>Best,<br/>The Team</p>"
    },
    {
        id: 2,
        name: "Monthly Newsletter",
        subject: "Your Monthly Update 📰",
        message: "<h3>What's New This Month?</h3><p>Here are the top highlights from the past 30 days...</p><ul><li>Feature 1</li><li>Feature 2</li></ul><p>Stay tuned for more!</p>"
    }
];