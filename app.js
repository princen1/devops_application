const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <h1>🚀 DevOps Live App</h1>
        <p>Welcome students!! This app is deployed using DevOps.</p>
    `);
});

ap.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});