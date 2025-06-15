import jwt from "jsonwebtoken";
import { users } from "../users.js";

const SECRET = "your_jwt_secret";

export const login = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ msg: "Invalid credentials" });

  const token = jwt.sign({ id: user.id, role: user.role }, SECRET, { expiresIn: "1h" });
  res.json({ token });
};
 
