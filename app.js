const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(express.static('public')); // Ensure your static files are being served correctly

app.post('/search', (req, res) => {
    const searchQuery = req.body.query; // Ensure this matches the name attribute in your HTML form input
    if (!searchQuery) {
        return res.status(400).send('Search query is required.');
    }
    res.send(`Result: ${searchQuery}`); // Echo the search query for testing
});

const port = process.env.PORT || 3000; // Use the environment variable PORT, or 3000 if it's not set
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
