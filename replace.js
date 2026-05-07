const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  // Custom case-preserving replace
  // Botivate -> Ace Mail
  content = content.replace(/Botivate/g, 'Ace Mail');
  // botivate -> ace_mail
  content = content.replace(/botivate/g, 'ace_mail');
  // BOTIVATE -> ACE MAIL
  content = content.replace(/BOTIVATE/g, 'ACE MAIL');
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated ' + filePath);
  }
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === '.git' || file === 'dist' || file === 'build' || file === 'replace.js') continue;
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walk(filePath);
    } else {
      if (['.js', '.jsx', '.html', '.json', '.gs', '.css'].some(ext => file.endsWith(ext))) {
        replaceInFile(filePath);
      }
    }
  }
}

walk(__dirname);
