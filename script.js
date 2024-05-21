const express = require('express');
const app = express();
const { exec } = require('child_process');
const path = require('path');

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/search', (req, res) => {
    const { query } = req.body;
    // Intentionally vulnerable code for demonstration purposes
    exec(query, (error, stdout, stderr) => {
        if (error) {
            return res.send(`Error: ${error.message}`);
        }
        if (stderr) {
            return res.send(`Stderr: ${stderr}`);
        }
        res.send(`Result: ${stdout}`);
    });
});

const port = process.env.PORT || 3000; // Default to 3000 if not specified by the environment
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
