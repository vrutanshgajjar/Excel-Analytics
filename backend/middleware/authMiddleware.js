 import jwt from "jsonwebtoken";

const SECRET = "your_jwt_secret";

export const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.sendStatus(401);
  
  const token = authHeader.split(" ")[1];
  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

export const authorize = role => (req, res, next) => {
  if (req.user.role !== role) return res.sendStatus(403);
  next();
};

