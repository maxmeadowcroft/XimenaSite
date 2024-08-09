const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const leaderboardFile = path.join(__dirname, 'leaderboard.json');
const wordsFile = path.join(__dirname, '../words/wordle.txt');

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

// Function to get a random word from wordle.txt
function getRandomWord() {
    try {
        const words = fs.readFileSync(wordsFile, 'utf8').split('\n').filter(Boolean);
        if (words.length === 0) throw new Error("No words available in the file");
        const randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex];
    } catch (err) {
        console.error('Error reading words file:', err);
        return null; // Returning null if an error occurs
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

// API endpoint to get a random word
app.get('/api/random-word', (req, res) => {
    const randomWord = getRandomWord();
    if (randomWord) {
        res.json({ word: randomWord });
    } else {
        res.status(500).json({ error: "Could not fetch a random word." });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
