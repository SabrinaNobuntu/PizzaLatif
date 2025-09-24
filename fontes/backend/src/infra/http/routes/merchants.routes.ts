import { Router } from 'express';
import merchantsController from '../controllers/merchants.controller';

const router = Router();

// Listar todos os merchants
router.get('/', merchantsController.getAll);

// Obter merchant por ID
router.get('/:id', merchantsController.getById);

export default router;
