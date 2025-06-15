import express from "express";
import { login } from "../controllers/authController.js";
import { authenticate, authorize } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", login);
router.get("/dashboard", authenticate, (req, res) => {
  res.json({ msg: `Hello ${req.user.role}, welcome to the dashboard!` });
});
router.get("/admin", authenticate, authorize("admin"), (req, res) => {
  res.json({ msg: "Welcome Admin!" });
});

export default router;
 
