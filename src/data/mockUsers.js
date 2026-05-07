// src/data/mockUsers.js
export const generateUsers = () => {
  const categories = ["Intern Applied", "Client", "Employee", "Lead", "Partner"];
  const statuses = ["Active", "Inactive", "Onboarding", "Rejected", "Pending"]; // More relevant statuses
  const users = [];

  for (let i = 1; i <= 1000; i++) {
    const randomCat = categories[Math.floor(Math.random() * categories.length)];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    users.push({
      id: i,
      name: `User ${i}`,
      email: `rajpootashishd@gmail.com`, // ✅ Fixed typo: removed extra 'd'
      category: randomCat,
      status: randomStatus,
    });
  }
  return users;
};