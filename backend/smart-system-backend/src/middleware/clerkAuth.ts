import { Request, Response, NextFunction } from 'express';


export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  const userId = req.headers['x-clerk-user-id'] as string;
  if (!userId) return res.status(401).json({ error: 'Unauthorized' });
  req.userId = userId;
  next();
};