// src/data/brandedTemplates.js
// Ace Mail — B2B Software / SaaS Company


export const BRANDED_TEMPLATES = [

  // ─── CORE BRANDED TEMPLATES ────────────────────────────────────────────────
  {
    id: "tp_001",
    name: "Enterprise Solution Launch",
    layoutType: "HERO_SaaS",
    idealFor: "Potential Leads",
    defaultData: {
      title: "Scale Your Business with Ace Mail",
      content: "Ace Mail helps businesses automate workflows, manage teams, and scale operations effortlessly. Book a live demo today and see the difference.",
      banner: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&q=80",
      ctaText: "Book a Free Demo",
      ctaLink: "https://acemail.in/demo"
    }
  },
  {
    id: "tp_002",
    name: "Client Onboarding",
    layoutType: "QUAD_RETAIL",
    idealFor: "New Clients",
    defaultData: {
      title: "Welcome to Ace Mail",
      subtitle: "Everything you need to get started",
      footer: "Free onboarding & dedicated support included",
      product0: "Setup", product1: "Training", product2: "Support", product3: "Access",
      price0: "Guided", price1: "Live", price2: "24/7", price3: "Instant",
      gridImg0: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=300&fit=crop&q=80",
      gridImg1: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=300&fit=crop&q=80",
      gridImg2: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=300&h=300&fit=crop&q=80",
      gridImg3: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=300&fit=crop&q=80"
    }
  },
  {
    id: "tp_003",
    name: "Intern Opportunity",
    layoutType: "Z_PATTERN",
    idealFor: "Interns Applied",
    defaultData: {
      mainTitle: "Join Our Engineering Team",
      title0: "Build Real Products",
      content0: "We are looking for passionate developers to join our internship program. Work on live software used by thousands of businesses every day.",
      image0: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop&q=80",
      title1: "Mentorship & Growth",
      content1: "Learn directly from senior engineers. Get exposure to modern tech stacks, agile workflows, and real-world problem solving.",
      image1: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop&q=80"
    }
  },
  {
    id: "tp_004",
    name: "Company Perks",
    layoutType: "TRIO_FEATURE",
    idealFor: "Interns & Employees",
    defaultData: {
      title: "Why Work at Ace Mail?",
      subtitle: "We invest in people, not just products",
      f1_title: "Remote-First", f1_desc: "Work from anywhere in India or around the world.",
      f2_title: "Continuous Learning", f2_desc: "Access to premium tech courses, workshops, and mentorship.",
      f3_title: "Fast Growth", f3_desc: "Fast-track career growth for high-performers in a scaling startup."
    }
  },
  {
    id: "tp_005",
    name: "Internal Newsletter",
    layoutType: "MODERN_BLOG",
    idealFor: "Employees",
    defaultData: {
      title: "Ace Mail Insider — February 2026",
      blog1_title: "Q1 Engineering Milestone",
      blog1_excerpt: "Our team shipped 14 features this quarter, reducing manual workflows by 35% for our top clients.",
      blog2_title: "New Team Members",
      blog2_excerpt: "Say hello to 3 new engineers and a product designer who joined us this month.",
      blog3_title: "Quarterly Hackathon",
      blog3_excerpt: "Our annual internal hackathon is coming up — start forming your teams now!"
    }
  },
  {
    id: "tp_006",
    name: "New Feature Announcement",
    layoutType: "FLASH_SALE",
    idealFor: "Clients",
    defaultData: {
      leftBanner: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=400&fit=crop&q=80",
      rightBanner: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=400&fit=crop&q=80",
      title: "New: AI-Powered Task Automation",
      content: "Automate repetitive tasks with zero code. Connect 100+ tools and let Ace Mail do the work.",
      ctaText: "Explore the Feature",
      ctaLink: "https://acemail.in/features"
    }
  },
  {
    id: "tp_007",
    name: "Client Success Story",
    layoutType: "TRUST_PILOT",
    idealFor: "Potential Leads",
    defaultData: {
      title: "Trusted by Growing Businesses",
      reviewText: "Ace Mail helped us eliminate 80% of our manual reporting. Our team now focuses on strategy instead of spreadsheets.",
      author: "Operations Head, FinTech Corp",
      rating: "⭐⭐⭐⭐⭐"
    }
  },
  {
    id: "tp_008",
    name: "Subscription Plans",
    layoutType: "PRICING_TABLE",
    idealFor: "Potential Leads",
    defaultData: {
      title: "Simple, Transparent Pricing",
      p1_name: "Startup", p1_price: "₹1,999/mo",
      p2_name: "Business", p2_price: "₹4,999/mo",
      p3_name: "Enterprise", p3_price: "Custom"
    }
  },
  {
    id: "tp_009",
    name: "CEO / Leadership Message",
    layoutType: "MINIMAL_TEXT",
    idealFor: "Employees & Stakeholders",
    defaultData: {
      title: "Our Vision for 2026",
      content: "As we scale into new markets, our focus remains on building software that truly simplifies business operations. Every line of code we ship is a step toward that mission. Let's make this year count.",
      logoImg: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=600&h=200&fit=crop&q=80"
    }
  },
  {
    id: "tp_010",
    name: "Ace Mail Mobile App",
    layoutType: "APP_DOWNLOAD",
    idealFor: "Clients & Employees",
    defaultData: {
      title: "Manage Your Team on the Go",
      content: "Download the Ace Mail app for iOS & Android — tasks, approvals, and reports in your pocket.",
      qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://acemail.in/download",
      ctaText: "Download the App",
      ctaLink: "https://acemail.in/download"
    }
  },

  // ─── SEASONAL OFFERS (reframed for software deals & promotions) ────────────
  {
    id: "tp_100",
    name: "Black Friday Software Deal",
    layoutType: "BlackFridaySale",
    idealFor: "Offers",
    defaultData: {
      title: "Black Friday: 50% Off All Plans",
      content: "Our biggest deal of the year. Upgrade your plan today and save 50% for the first 6 months. Limited seats available.",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=300&fit=crop&q=80",
      ctaText: "Grab the Deal",
      ctaLink: "https://acemail.in/pricing"
    }
  },
  {
    id: "tp_101",
    name: "Cyber Monday: Plan Upgrade",
    layoutType: "CyberMonday",
    idealFor: "Offers",
    defaultData: {
      title: "CYBER MONDAY",
      content: "The digital economy never sleeps. Upgrade to our Business plan today and unlock unlimited automations, advanced analytics, and priority support.",
      image: "https://images.unsplash.com/photo-1531297172868-9f1d1b53e9ff?w=1200&h=600&fit=crop&q=80",
      ctaText: "Upgrade My Plan",
      ctaLink: "https://acemail.in/pricing"
    }
  },
  {
    id: "tp_102",
    name: "Christmas: Year-End Offer",
    layoutType: "ChristmasOffer",
    idealFor: "Festivals",
    defaultData: {
      title: "A Gift for Your Business",
      content: "To celebrate the holiday season, we're offering 3 months free when you switch to an annual plan. Our way of saying thank you.",
      image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=1200&h=600&fit=crop&q=80",
      ctaText: "Claim Holiday Offer",
      ctaLink: "https://acemail.in/pricing"
    }
  },
  {
    id: "tp_103",
    name: "New Year: Fresh Start",
    layoutType: "NewYearGreeting",
    idealFor: "Festivals",
    defaultData: {
      title: "Happy New Year from Ace Mail!",
      content: "2026 is your year to automate more, stress less, and grow faster. We're with you every step of the way. Here's to a productive year ahead!",
      image: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=1200&h=600&fit=crop&q=80",
      ctaText: "Start the Year Right",
      ctaLink: "https://acemail.in"
    }
  },
  {
    id: "tp_104",
    name: "Halloween: Spooky Savings",
    layoutType: "HalloweenParty",
    idealFor: "Festivals",
    defaultData: {
      title: "👻 Scary Good Deals",
      content: "Don't be spooked by manual workflows any longer. For this Halloween only, get 30% off any Ace Mail plan. Offer vanishes at midnight!",
      image: "https://images.unsplash.com/photo-1509557965875-b88c97176a26?w=1200&h=600&fit=crop&q=80",
      ctaText: "Grab the Offer",
      ctaLink: "https://acemail.in/pricing"
    }
  },
  {
    id: "tp_105",
    name: "Valentine's: Love Your Workflow",
    layoutType: "ValentineSpecial",
    idealFor: "Festivals",
    defaultData: {
      title: "Fall in Love with Automation ❤️",
      content: "This Valentine's Day, treat your team to the gift of efficiency. Unlock premium features at a special rate — because great teams deserve great tools.",
      image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1200&h=600&fit=crop&q=80",
      ctaText: "Explore the Gift",
      ctaLink: "https://acemail.in/features"
    }
  },
  {
    id: "tp_106",
    name: "Easter: Spring into Savings",
    layoutType: "EasterSale",
    idealFor: "Offers",
    defaultData: {
      title: "Spring Into Efficiency",
      content: "New quarter, new goals. This Easter, we're offering 20% off on Business plan upgrades to help your team hit Q2 targets faster.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop&q=80",
      ctaText: "View the Offer",
      ctaLink: "https://acemail.in/pricing"
    }
  },
  {
    id: "tp_107",
    name: "Mid-Year Software Promo",
    layoutType: "SummerVibes",
    idealFor: "Offers",
    defaultData: {
      title: "Mid-Year Special: Save Big",
      content: "Half the year is gone — time to double your productivity. Upgrade to an annual plan this summer and save 40% vs monthly billing.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=600&fit=crop&q=80",
      ctaText: "Switch to Annual",
      ctaLink: "https://acemail.in/pricing"
    }
  },
  {
    id: "tp_108",
    name: "Year-End Plan Renewal",
    layoutType: "WinterCollection",
    idealFor: "Offers",
    defaultData: {
      title: "Renew & Save Before Year-End",
      content: "Don't let your plan expire. Renew before December 31st and lock in current pricing for another full year. Rates increase in January.",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&h=600&fit=crop&q=80",
      ctaText: "Renew My Plan",
      ctaLink: "https://acemail.in/pricing"
    }
  },
  {
    id: "tp_109",
    name: "Q2 Launch Promotion",
    layoutType: "SpringClearance",
    idealFor: "Offers",
    defaultData: {
      title: "Q2 Special: Onboard 2X Faster",
      content: "We've cut onboarding time in half with our new setup wizard. Start your free trial today and go live in under 30 minutes.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop&q=80",
      ctaText: "Start Free Trial",
      ctaLink: "https://acemail.in/signup"
    }
  },
  {
    id: "tp_110",
    name: "Quarterly Feature Drop",
    layoutType: "AutumnArrivals",
    idealFor: "Clients",
    defaultData: {
      title: "Q3 Feature Update",
      content: "Our biggest quarterly release is here. Smarter dashboards, faster exports, and a brand new mobile experience — all live now.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop&q=80",
      ctaText: "See What's New",
      ctaLink: "https://acemail.in/changelog"
    }
  },
  {
    id: "tp_111",
    name: "Diwali Special Offer",
    layoutType: "DiwaliFestival",
    idealFor: "Festivals",
    defaultData: {
      title: "Happy Diwali from Ace Mail! 🪔",
      content: "May this festival of lights bring new opportunities for your business. As our Diwali gift, enjoy 25% off on any plan upgrade this week.",
      image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=1200&h=600&fit=crop&q=80",
      ctaText: "Claim Diwali Offer",
      ctaLink: "https://acemail.in/pricing"
    }
  },
  {
    id: "tp_112",
    name: "Thanksgiving: Team Appreciation",
    layoutType: "ThanksgivingDinner",
    idealFor: "Festivals",
    defaultData: {
      title: "Thank You for a Great Year",
      content: "We are deeply grateful for every client, partner, and team member who has trusted Ace Mail this year. Your success is our biggest achievement.",
      image: "https://images.unsplash.com/photo-1574527327617-d2bada33a16d?w=1200&h=600&fit=crop&q=80",
      ctaText: "Message from Our Team",
      ctaLink: "https://acemail.in/blog"
    }
  },
  {
    id: "tp_113",
    name: "Mother's Day: Team Appreciation",
    layoutType: "MotherDay",
    idealFor: "Festivals",
    defaultData: {
      title: "Happy Mother's Day 🌸",
      content: "To all the incredible mothers on our team and in our community — your strength, patience, and dedication inspire us every day. Thank you.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop&q=80",
      ctaText: "A Note from Ace Mail",
      ctaLink: "https://acemail.in"
    }
  },
  {
    id: "tp_114",
    name: "Father's Day: Team Appreciation",
    layoutType: "FatherDay",
    idealFor: "Festivals",
    defaultData: {
      title: "Happy Father's Day 👔",
      content: "To all the amazing fathers who balance work with family — we see you and we appreciate you. Wishing you a day as wonderful as the work you do.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&h=600&fit=crop&q=80",
      ctaText: "A Note from Ace Mail",
      ctaLink: "https://acemail.in"
    }
  },

  // ─── EVENTS & WEBINARS ─────────────────────────────────────────────────────
  {
    id: "tp_200",
    name: "Webinar Invite",
    layoutType: "WebinarInvite",
    idealFor: "Events",
    defaultData: {
      title: "Live Webinar: Automate Your Business in 60 Minutes",
      date: "March 15, 2026 • 3:00 PM IST",
      content: "Join our expert-led live session and learn how to build your first automation workflow from scratch — no coding required.",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1200&h=600&fit=crop&q=80",
      ctaText: "Reserve My Seat",
      ctaLink: "https://acemail.in/webinar"
    }
  },
  {
    id: "tp_201",
    name: "Tech Conference Pass",
    layoutType: "ConferencePass",
    idealFor: "Events",
    defaultData: {
      title: "Ace MailConf 2026",
      subtitle: "The Future of Business Automation",
      date: "April 10–12, 2026",
      location: "Hyderabad International Convention Centre",
      content: "3 days of keynotes, hands-on workshops, and networking with automation leaders across India.",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1200&h=600&fit=crop&q=80",
      ctaText: "Get Your Pass",
      ctaLink: "https://acemail.in/conference"
    }
  },
  {
    id: "tp_202",
    name: "Technical Workshop",
    layoutType: "WorkshopRegistration",
    idealFor: "Events",
    defaultData: {
      title: "Hands-On Automation Workshop",
      date: "February 28, 2026 • 10:00 AM – 2:00 PM IST",
      content: "A focused half-day workshop where you'll design, build, and deploy your first automation workflow with live guidance from our engineers.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=600&fit=crop&q=80",
      ctaText: "Register Now — Free",
      ctaLink: "https://acemail.in/workshop"
    }
  },
  {
    id: "tp_203",
    name: "Networking Event Invite",
    layoutType: "EventInvite",
    idealFor: "Events",
    defaultData: {
      title: "You're Invited to Ace MailConnect",
      subtitle: "An Evening of Tech, Talks & Networking",
      date: "March 5, 2026 • 6:30 PM",
      location: "The Grand, Bangalore",
      content: "Join founders, product leads, and developers for an exclusive evening of demos, discussions, and making meaningful connections.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=600&fit=crop&q=80",
      ctaText: "RSVP Now",
      ctaLink: "https://acemail.in/connect"
    }
  },

  // ─── NEWSLETTERS & CONTENT ─────────────────────────────────────────────────
  {
    id: "tp_300",
    name: "Modern Newsletter",
    layoutType: "NewsletterModern",
    idealFor: "Newsletters",
    defaultData: {
      title: "Ace Mail Weekly",
      subtitle: "Your weekly dose of automation insights & product news",
      content: "This week: How AI is reshaping task management, a deep-dive into our new approval workflows, and tips from our power users.",
      image: "https://images.unsplash.com/photo-1586281380149-9a11cca725b0?w=1200&h=600&fit=crop&q=80",
      ctaText: "Read Full Issue",
      ctaLink: "https://acemail.in/newsletter"
    }
  },
  {
    id: "tp_301",
    name: "Weekly Team Digest",
    layoutType: "WeeklyDigest",
    idealFor: "Newsletters",
    defaultData: {
      title: "This Week at Ace Mail",
      content: "A quick summary of what the team shipped, key metrics from this week, and what we're focused on next.",
      ctaText: "View Full Digest",
      ctaLink: "https://acemail.in/digest"
    }
  },
  {
    id: "tp_302",
    name: "Monthly Roundup",
    layoutType: "MonthlyRoundup",
    idealFor: "Newsletters",
    defaultData: {
      title: "February in Review",
      content: "From 3 new features to 200 new clients — here's everything that happened at Ace Mail this month and what's coming in March.",
      image: "https://images.unsplash.com/photo-1586281380149-9a11cca725b0?w=1200&h=600&fit=crop&q=80",
      ctaText: "View Full Report",
      ctaLink: "https://acemail.in/monthly-review"
    }
  },
  {
    id: "tp_303",
    name: "Year in Review",
    layoutType: "YearInReview",
    idealFor: "Announcements",
    defaultData: {
      title: "Ace Mail: 2025 in Review",
      content: "From our first 100 clients to 5,000+ businesses automated, here's how 2025 shaped who we are today. Thank you for being part of the journey.",
      image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=1200&h=600&fit=crop&q=80",
      ctaText: "Read the Full Story",
      ctaLink: "https://acemail.in/year-review"
    }
  },
  {
    id: "tp_304",
    name: "Product Update",
    layoutType: "ProductUpdate",
    idealFor: "Announcements",
    defaultData: {
      title: "Ace Mail v3.0 is Here",
      content: "We've rebuilt the core from the ground up — faster automations, a redesigned dashboard, and a brand new mobile app. All free for existing users.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop&q=80",
      ctaText: "See Full Changelog",
      ctaLink: "https://acemail.in/changelog"
    }
  },

  // ─── CUSTOMER LIFECYCLE EMAILS ────────────────────────────────────────────
  {
    id: "tp_400",
    name: "Trial Expiry Reminder",
    layoutType: "AbandonedCart",
    idealFor: "Potential Leads",
    defaultData: {
      title: "Your Free Trial is Ending Soon!",
      content: "You've been building great things with Ace Mail — don't let it stop here. Upgrade now and keep all your workflows, data, and settings intact.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop&q=80",
      ctaText: "Upgrade My Account",
      ctaLink: "https://acemail.in/pricing"
    }
  },
  {
    id: "tp_401",
    name: "Plan Confirmation",
    layoutType: "OrderConfirmation",
    idealFor: "Clients",
    defaultData: {
      title: "Subscription Confirmed! 🎉",
      orderNumber: "#SUB-2026-00142",
      content: "Your Ace Mail Business plan is now active. You have full access to all premium features, unlimited automations, and priority support.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop&q=80",
      ctaText: "Launch My Dashboard",
      ctaLink: "https://acemail.in/dashboard"
    }
  },
  {
    id: "tp_402",
    name: "Onboarding Started",
    layoutType: "OrderShipped",
    idealFor: "New Clients",
    defaultData: {
      title: "Your Onboarding Has Begun!",
      content: "Your dedicated onboarding specialist has been assigned. Expect a call within 24 hours to walk you through your first workflow setup.",
      ctaText: "Access My Dashboard",
      ctaLink: "https://acemail.in/dashboard"
    }
  },
  {
    id: "tp_403",
    name: "Go-Live Confirmation",
    layoutType: "DeliverySuccess",
    idealFor: "Clients",
    defaultData: {
      title: "You're Live on Ace Mail! ✅",
      content: "Your first automation workflow is now active and running. Monitor performance, manage tasks, and track results — all from your dashboard.",
      ctaText: "View Live Dashboard",
      ctaLink: "https://acemail.in/dashboard"
    }
  },
  {
    id: "tp_404",
    name: "Limited-Time Plan Discount",
    layoutType: "FlashDiscount",
    idealFor: "Offers",
    defaultData: {
      title: "48-Hour Flash Offer: 30% Off",
      content: "For the next 48 hours, upgrade to any paid plan and save 30%. No coupon needed — discount applied automatically at checkout.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop&q=80",
      ctaText: "Claim 30% Off",
      ctaLink: "https://acemail.in/pricing"
    }
  },
  {
    id: "tp_405",
    name: "User Feedback Request",
    layoutType: "ReviewRequest",
    idealFor: "Clients",
    defaultData: {
      title: "How Are We Doing?",
      content: "Your feedback directly shapes the future of Ace Mail. It takes just 2 minutes and helps us build features that matter to you.",
      ctaText: "Share My Feedback",
      ctaLink: "https://acemail.in/feedback"
    }
  },
  {
    id: "tp_406",
    name: "Refer a Business",
    layoutType: "ReferAFriend",
    idealFor: "Clients",
    defaultData: {
      title: "Refer a Business, Earn Rewards",
      content: "Know someone who could benefit from Ace Mail? Refer them and earn 2 months free on your plan for every successful referral.",
      ctaText: "Start Referring",
      ctaLink: "https://acemail.in/refer"
    }
  },
  {
    id: "tp_407",
    name: "Client Loyalty Rewards",
    layoutType: "LoyaltyProgram",
    idealFor: "Clients",
    defaultData: {
      title: "Your Loyalty Perks Are Here",
      content: "As a long-term Ace Mail client, you've unlocked exclusive benefits — priority support, early feature access, and a personal account manager.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop&q=80",
      ctaText: "View My Perks",
      ctaLink: "https://acemail.in/loyalty"
    }
  },

  // ─── PRODUCT & USER LIFECYCLE ─────────────────────────────────────────────
  {
    id: "tp_500",
    name: "Welcome Aboard",
    layoutType: "WelcomeEmail",
    idealFor: "New Clients",
    defaultData: {
      title: "Welcome to Ace Mail",
      subtitle: "Your smarter way to manage workflows, teams, and operations — all in one platform.",
      heroImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop&q=80",
      ctaText: "Launch Your Dashboard",
      ctaLink: "https://acemail.in/dashboard"
    }
  },
  {
    id: "tp_501",
    name: "Software Product Launch",
    layoutType: "ProductLaunch",
    idealFor: "Potential Leads",
    defaultData: {
      title: "Introducing Ace Mail Intelligence",
      badge: "NOW LIVE",
      description: "AI-powered task delegation, real-time reporting, and smart approval workflows — all built into one unified platform.",
      productImage: "https://images.unsplash.com/photo-1531297172868-9f1d1b53e9ff?w=1200&h=800&fit=crop&q=80"
    }
  },
  {
    id: "tp_502",
    name: "Client Feedback Survey",
    layoutType: "FeedbackRequest",
    idealFor: "Clients",
    defaultData: {
      title: "Help Us Build Better Software",
      content: "Share your experience with Ace Mail. Your input directly informs what we prioritize on our product roadmap.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=600&fit=crop&q=80",
      ctaText: "Take the Survey",
      ctaLink: "https://acemail.in/feedback"
    }
  },
  {
    id: "tp_503",
    name: "Password Reset",
    layoutType: "ResetPassword",
    idealFor: "Clients",
    defaultData: {
      title: "Reset Your Password",
      content: "We received a request to reset the password for your Ace Mail account. Click the button below to set a new password. This link expires in 30 minutes.",
      ctaText: "Reset My Password",
      ctaLink: "https://acemail.in/reset"
    }
  },
  {
    id: "tp_504",
    name: "Quick Notification",
    layoutType: "SimpleCard",
    idealFor: "Clients",
    defaultData: {
      title: "Important Update from Ace Mail",
      content: "We've made some improvements to your account experience. Log in to see what's new — no action required on your end.",
      ctaText: "View Update",
      ctaLink: "https://acemail.in"
    }
  },
  {
    id: "tp_505",
    name: "VIP Enterprise Access",
    layoutType: "VIPAccess",
    idealFor: "Potential Leads",
    defaultData: {
      title: "Enterprise Access — Invitation Only",
      content: "You've been selected for early access to our Enterprise tier. Unlimited users, dedicated infrastructure, and a named account manager included.",
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1200&h=800&fit=crop&q=80",
      ctaText: "Accept My Invitation",
      ctaLink: "https://acemail.in/enterprise"
    }
  },

  // ─── EMPLOYEE & TEAM MILESTONES ───────────────────────────────────────────
  {
    id: "tp_600",
    name: "Birthday Wishes — Team",
    layoutType: "BirthdayWishes",
    idealFor: "Employees",
    defaultData: {
      title: "Happy Birthday! 🎂",
      content: "From the entire Ace Mail family — wishing you a day filled with joy, celebration, and well-deserved rest. You make this team better every day.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop&q=80",
      ctaText: "Send a Birthday Message",
      ctaLink: "https://acemail.in"
    }
  },
  {
    id: "tp_601",
    name: "Work Anniversary",
    layoutType: "AnniversaryCelebration",
    idealFor: "Employees",
    defaultData: {
      title: "Happy Work Anniversary! 🎉",
      content: "Today marks an important milestone in your journey at Ace Mail. Your contributions have made a real impact on our product and our culture. Thank you for being here.",
      image: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=1200&h=600&fit=crop&q=80",
      ctaText: "Celebrate the Milestone",
      ctaLink: "https://acemail.in"
    }
  }
];
