// server.js
const express = require('express');
const cors = require('cors');
const WebSocket = require('ws');
const http = require('http');
const path = require('path');
const fs = require('fs').promises;
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Middleware
app.use(cors());
app.use(express.json());

// Create upload and temp directories
const uploadDir = path.join(__dirname, 'uploads');
const tempDir = path.join(__dirname, 'temp');

async function ensureDirectories() {
    try {
        await fs.mkdir(uploadDir, { recursive: true });
        await fs.mkdir(tempDir, { recursive: true });
    } catch (err) {
        console.error('Error creating directories:', err);
    }
}

ensureDirectories();

// WebSocket connection handling
wss.on('connection', (ws) => {
    console.log('Client connected to processing server');

    ws.on('message', async (message) => {
        try {
            const data = JSON.parse(message);
            // Handle different message types
            switch (data.type) {
                case 'generation_request':
                    // Handle text generation request
                    break;
                case 'analysis_request':
                    // Handle analysis request
                    break;
                default:
                    console.warn('Unknown message type:', data.type);
            }
        } catch (err) {
            console.error('Error processing message:', err);
            ws.send(JSON.stringify({
                type: 'error',
                error: 'Failed to process message'
            }));
        }
    });

    ws.on('close', () => {
        console.log('Client disconnected from processing server');
    });
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'healthy' });
});

// AI model status endpoint
app.get('/api/model/status', (req, res) => {
    res.json({
        status: 'ready',
        models: [{
            name: 'LM Studio',
            endpoint: process.env.AI_HOST || 'http://127.0.0.1:9000',
            status: 'connected'
        }]
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Internal server error',
        message: err.message
    });
});

const PORT = process.env.PORT || 7000;
server.listen(PORT, () => {
    console.log(`Processing server running on port ${PORT}`);
});
