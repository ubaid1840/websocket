// backend/server.js
const WebSocket = require('ws');
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('WebSocket Server is Running');
});

// Create a WebSocket server
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('New client connected');

  // Listen for messages from clients
  ws.on('message', (message) => {
    console.log(`Received: ${message}`);
  });

  // Send a message to the client
  ws.send('Hello from server');

  // Handle when a client disconnects
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

// Start the server
server.listen(4000, () => {
  console.log('WebSocket server is running on ws://localhost:4000');
});
