import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';

/**
 * Middleware para validar body da requisição usando Joi
 */
export function validateSchema(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({
        status: 'error',
        message: error.details.map((d) => d.message).join(', ')
      });
    }
    next();
  };
}
