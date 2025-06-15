import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Simple hardcoded user for demo
const USER = { username: "admin", password: "admin123" };

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  if (username === USER.username && password === USER.password) {
    // On success, return a dummy token
    res.json({ token: "dummy-jwt-token" });
  } else {
    // On failure, return 401
    res.status(401).json({ message: "Invalid credentials" });
  }
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
