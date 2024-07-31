const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Route to handle sign-up
app.post('/signup', (req, res) => {
    const { email, password } = req.body;

    // Simple validation and logging (in a real app, save to a database)
    if (email && password) {
        console.log(`New user signed up: ${email}`);
        res.status(200).json({ message: "Sign up successful" });
    } else {
        res.status(400).json({ message: "Invalid data" });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log(`Server is running on https://www.Sfarettech.com.ng:${port}`);
});