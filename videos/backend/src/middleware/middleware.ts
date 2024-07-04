import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export interface ITokenData {
  id: string;
  name: string;
  iat: number;
  exp: number;
}

export function bearerAuthentication(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  let token = req.header("Authorization");
  if (!token) return res.status(401).json({ error: "Access denied" });
  try {
    token = token.replace("Bearer ", "");
    const decoded = verify(token, process.env.JWT_SECRET_KEY!.toString());
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
}
