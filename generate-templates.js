import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const templates = [
    { name: 'BlackFridaySale', title: 'Black Friday Mega Sale', type: 'Offers', img: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=300&fit=crop&q=80' },
    { name: 'CyberMonday', title: 'Cyber Monday Deals', type: 'Offers', img: 'https://images.unsplash.com/photo-1531297172868-9f1d1b53e9ff?w=600&h=300&fit=crop&q=80' },
    { name: 'ChristmasOffer', title: 'Merry Christmas', type: 'Festivals', img: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=600&h=300&fit=crop&q=80' },
    { name: 'NewYearGreeting', title: 'Happy New Year', type: 'Festivals', img: 'https://images.unsplash.com/photo-1546271876-0640a8ba7c6a?w=600&h=300&fit=crop&q=80' },
    { name: 'HalloweenParty', title: 'Spooky Halloween', type: 'Festivals', img: 'https://images.unsplash.com/photo-1508361001413-7a9dca21d08a?w=600&h=300&fit=crop&q=80' },
    { name: 'ValentineSpecial', title: 'Valentine Special', type: 'Festivals', img: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&h=300&fit=crop&q=80' },
    { name: 'EasterSale', title: 'Easter Eggstravaganza', type: 'Festivals', img: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600&h=300&fit=crop&q=80' },
    { name: 'SummerVibes', title: 'Summer Vibes', type: 'Offers', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=300&fit=crop&q=80' },
    { name: 'WinterCollection', title: 'Winter Collection', type: 'Offers', img: 'https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=600&h=300&fit=crop&q=80' },
    { name: 'SpringClearance', title: 'Spring Clearance', type: 'Offers', img: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&h=300&fit=crop&q=80' },
    { name: 'AutumnArrivals', title: 'Autumn Arrivals', type: 'Offers', img: 'https://images.unsplash.com/photo-1507371341162-763b5e419408?w=600&h=300&fit=crop&q=80' },
    { name: 'DiwaliFestival', title: 'Happy Diwali', type: 'Festivals', img: 'https://images.unsplash.com/photo-1508717272800-9fff97da7e8f?w=600&h=300&fit=crop&q=80' },
    { name: 'ThanksgivingDinner', title: 'Happy Thanksgiving', type: 'Festivals', img: 'https://images.unsplash.com/photo-1511699712600-11414c211159?w=600&h=300&fit=crop&q=80' },
    { name: 'MotherDay', title: "Happy Mother's Day", type: 'Festivals', img: 'https://images.unsplash.com/photo-1494028698538-2cd52a400b17?w=600&h=300&fit=crop&q=80' },
    { name: 'FatherDay', title: "Happy Father's Day", type: 'Festivals', img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&h=300&fit=crop&q=80' },
    { name: 'WebinarInvite', title: 'Join Our Webinar', type: 'Events', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=300&fit=crop&q=80' },
    { name: 'ConferencePass', title: 'Conference Pass', type: 'Events', img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=300&fit=crop&q=80' },
    { name: 'WorkshopRegistration', title: 'Workshop Registration', type: 'Events', img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=300&fit=crop&q=80' },
    { name: 'ProductUpdate', title: 'Product Update', type: 'Announcements', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop&q=80' },
    { name: 'WeeklyDigest', title: 'Weekly Digest', type: 'Newsletters', img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=300&fit=crop&q=80' },
    { name: 'MonthlyRoundup', title: 'Monthly Roundup', type: 'Newsletters', img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=300&fit=crop&q=80' },
    { name: 'YearInReview', title: 'Year in Review', type: 'Newsletters', img: 'https://images.unsplash.com/photo-1542435503-956c469947f6?w=600&h=300&fit=crop&q=80' },
    { name: 'AbandonedCart', title: 'You Left Something Behind', type: 'E-commerce', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=300&fit=crop&q=80' },
    { name: 'OrderShipped', title: 'Your Order is Shipped', type: 'E-commerce', img: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=600&h=300&fit=crop&q=80' },
    { name: 'DeliverySuccess', title: 'Delivery Successful', type: 'E-commerce', img: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?w=600&h=300&fit=crop&q=80' },
    { name: 'ReviewRequest', title: 'Leave a Review', type: 'E-commerce', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=300&fit=crop&q=80' },
    { name: 'ReferAFriend', title: 'Refer a Friend', type: 'Offers', img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=300&fit=crop&q=80' },
    { name: 'LoyaltyProgram', title: 'Join Our Loyalty Program', type: 'Offers', img: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=600&h=300&fit=crop&q=80' },
    { name: 'BirthdayWishes', title: 'Happy Birthday!', type: 'Events', img: 'https://images.unsplash.com/photo-1530103862676-de8892b07439?w=600&h=300&fit=crop&q=80' },
    { name: 'AnniversaryCelebration', title: 'Happy Anniversary!', type: 'Events', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=300&fit=crop&q=80' },
    { name: 'FlashDiscount', title: 'Flash Discount', type: 'Offers', img: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=600&h=300&fit=crop&q=80' },
    { name: 'VIPAccess', title: 'VIP Access', type: 'Offers', img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=300&fit=crop&q=80' }
];

const templateDir = path.join(__dirname, 'src', 'email', 'templates');
const indexFile = path.join(templateDir, 'index.js');
const brandedFile = path.join(__dirname, 'src', 'data', 'brandedTemplates.js');

let indexContent = fs.readFileSync(indexFile, 'utf8');
let brandedContent = fs.readFileSync(brandedFile, 'utf8');

let newBrandedEntries = [];

templates.forEach((tpl, idx) => {
    const componentCode = `import React from "react";
import { EditableText, EditableImg, Button } from "../elements/Shared";

export const ${tpl.name} = ({ data, onUpdate, onImageClick, uneditable }) => {
    const containerStyle = {
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid #e5e7eb',
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif"
    };

    return (
        <div style={{ width: '100%', backgroundColor: '#f9fafb', padding: '40px 0' }}>
            <center>
                <table border="0" cellPadding="0" cellSpacing="0" width="100%" style={{ maxWidth: '600px', backgroundColor: '#ffffff' }}>
                    <tbody>
                        <tr>
                            <td align="center" style={containerStyle}>
                                <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td style={{ padding: '0' }}>
                                                <EditableImg
                                                    field="image"
                                                    src={data.image || "${tpl.img}"}
                                                    label="Header Image"
                                                    onImageClick={onImageClick}
                                                    uneditable={uneditable}
                                                    style={{ display: 'block', width: '100%', height: 'auto', border: 'none' }}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ padding: '40px 32px', textAlign: 'center' }}>
                                                <div style={{ marginBottom: '16px' }}>
                                                    <EditableText
                                                        field="title"
                                                        value={data.title || "${tpl.title}"}
                                                        isHeader
                                                        onUpdate={onUpdate}
                                                        uneditable={uneditable}
                                                        style={{ fontSize: '28px', fontWeight: 'bold', color: '#111827', margin: 0, lineHeight: '1.2' }}
                                                    />
                                                </div>
                                                <div style={{ marginBottom: '32px' }}>
                                                    <EditableText
                                                        field="content"
                                                        value={data.content || "Don't miss out on our special event! Grab your offers now before they are gone."}
                                                        onUpdate={onUpdate}
                                                        uneditable={uneditable}
                                                        style={{ fontSize: '16px', color: '#4b5563', margin: 0, lineHeight: '1.6' }}
                                                    />
                                                </div>
                                                <div style={{ marginBottom: '16px' }}>
                                                    <Button text={data.ctaText || "Explore Now"} href={data.ctaLink || "#"} />
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </center>
        </div>
    );
};
`;

    fs.writeFileSync(path.join(templateDir, `${tpl.name}.jsx`), componentCode);

    if (!indexContent.includes(`export * from './${tpl.name}';`)) {
        indexContent += `\nexport * from './${tpl.name}';`;
    }

    const newId = `tp_1${idx.toString().padStart(2, '0')}`;
    newBrandedEntries.push(`
  {
    id: "${newId}",
    name: "${tpl.title}",
    layoutType: "${tpl.name}",
    idealFor: "${tpl.type}",
    defaultData: {
      title: "${tpl.title}",
      content: "Don't miss out on our special event! Grab your offers now before they are gone.",
      image: "${tpl.img}",
      ctaText: "Explore Now",
      ctaLink: "https://botivate.ai/offers"
    }
  }`);
});

fs.writeFileSync(indexFile, indexContent);

// Replace the last `];` with `, ...newEntries ];`
brandedContent = brandedContent.replace(/\];\s*$/, ',' + newBrandedEntries.join(',') + '\n];\n');

fs.writeFileSync(brandedFile, brandedContent);

console.log('Templates generated successfully!');
