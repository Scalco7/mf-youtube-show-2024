import { NextFunction, Request, Response } from "express";

export function bearerAuthentication(req: Request, res: Response, next: NextFunction) {
    let token = req.header('Authorization');
    if (!token) return res.status(401).json({ error: 'Access denied' });
    try {
        token = token.replace('Bearer ', '')
        if (token == process.env.ACCESS_API_KEY)
            next();
        else
            res.status(401).json({ error: 'Invalid api key' });
    } catch (error) {
        res.status(401).json({ error: 'Invalid api key' });
    }
}