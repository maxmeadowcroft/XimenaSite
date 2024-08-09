const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const leaderboardFile = path.join(__dirname, 'leaderboard.json');

// Function to read leaderboard data
function readLeaderboard() {
    try {
        const data = fs.readFileSync(leaderboardFile, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading leaderboard file:', err);
        return [];
    }
}

// Function to write leaderboard data
function writeLeaderboard(data) {
    try {
        fs.writeFileSync(leaderboardFile, JSON.stringify(data, null, 2), 'utf8');
    } catch (err) {
        console.error('Error writing leaderboard file:', err);
    }
}

// API endpoint to get the leaderboard
app.get('/api/leaderboard', (req, res) => {
    const leaderboard = readLeaderboard();
    res.json(leaderboard);
});

// API endpoint to update the leaderboard
app.post('/api/leaderboard', (req, res) => {
    const { initials, streak } = req.body;
    let leaderboard = readLeaderboard();
    leaderboard.push({ initials, streak });
    leaderboard = leaderboard.sort((a, b) => b.streak - a.streak).slice(0, 10); // Keep top 10 scores
    writeLeaderboard(leaderboard);
    res.json(leaderboard);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
