import { Request, Response, NextFunction } from 'express';

/**
 * Middleware para autenticação interna simples (token interno ou header secreto)
 */
export function authInternal(req: Request, res: Response, next: NextFunction) {
  const secretHeader = req.headers['x-internal-token'];
  if (!secretHeader || secretHeader !== process.env.INTERNAL_SECRET) {
    return res.status(401).json({ status: 'error', message: 'Unauthorized' });
  }
  next();
}
