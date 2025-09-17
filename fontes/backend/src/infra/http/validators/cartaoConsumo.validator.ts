import { check, query } from 'express-validator'; 

export const createNewCartaoConsumoValidator = [ 
  ]; 

export const findAllCartaoConsumoValidator = [ 
  query('page').notEmpty().isNumeric().withMessage('Only digits allowed in title page'), 
  query('limit').optional().isNumeric().withMessage('Only digits allowed in title limit') 
  ]; 
