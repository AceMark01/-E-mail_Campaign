import fs from 'fs';
const files = ['server.js', 'start-all.js', 'replace.js', 'generate-templates.js'];
files.forEach(f => {
    if (fs.existsSync(f)) {
        fs.unlinkSync(f);
        console.log(`Deleted ${f}`);
    }
});
