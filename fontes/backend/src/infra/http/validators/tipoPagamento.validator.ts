import { check, query } from 'express-validator'; 

export const createNewTipoPagamentoValidator = [ 
  ]; 

export const findAllTipoPagamentoValidator = [ 
  query('page').notEmpty().isNumeric().withMessage('Only digits allowed in title page'), 
  query('limit').optional().isNumeric().withMessage('Only digits allowed in title limit') 
  ]; 
