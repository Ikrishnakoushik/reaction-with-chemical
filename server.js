const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// Signup page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'signup.html'));
});

// Reaction page
app.get('/reaction', (req, res) => {
  res.sendFile(path.join(__dirname, 'reaction.html'));
});

// Signup API
app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;

  console.log("New user:", name, email);

  // (later we’ll save to database)
  res.json({ success: true });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

