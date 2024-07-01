import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { parse } from 'url'

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

export function webSocketAuthentication(req: Request): boolean {
  let { token } = parse(req.url, true).query

  if (!token || typeof token != 'string') return false

  try {
    token = token.replace("Bearer ", "");
    const decoded = verify(token, process.env.JWT_SECRET_KEY!.toString());
  } catch (error) {
    return false
  }

  return true
}
