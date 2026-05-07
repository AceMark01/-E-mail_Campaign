import { spawn } from 'child_process';

const options = { stdio: 'inherit', shell: true };

console.log('🚀 Starting Ace Mail Fullsystem...');

// Start Backend
const server = spawn('npx', ['nodemon', 'server.js'], options);

// Start Frontend
const client = spawn('npx', ['vite'], options);

server.on('error', (err) => console.error('Failed to start server:', err));
client.on('error', (err) => console.error('Failed to start client:', err));
