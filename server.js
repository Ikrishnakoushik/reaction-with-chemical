const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: "*",   // allow Netlify
  methods: ["GET", "POST"]
}));

app.use(express.json());

// Health check (IMPORTANT)
app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});

// Signup API
app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  console.log("New user:", name, email);

  res.json({ success: true });
});

// Reaction page API (simple test)
app.get("/reaction", (req, res) => {
  res.send("Reaction page reached 🧪");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
