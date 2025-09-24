import Joi from 'joi';

export const orderSchema = Joi.object({
  id: Joi.string().required(),
  merchantId: Joi.string().required(),
  status: Joi.string().valid('pending', 'confirmed', 'cancelled').required(),
  payload: Joi.object().optional(),
});
