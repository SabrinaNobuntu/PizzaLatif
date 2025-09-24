import rateLimit from 'express-rate-limit';

export const rateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minuto
  max: 60, // máximo de 60 requisições por IP
  message: {
    status: 'error',
    message: 'Too many requests, please try again later.'
  }
});
