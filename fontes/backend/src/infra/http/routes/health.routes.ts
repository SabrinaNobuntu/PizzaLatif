import { Router } from 'express';
import healthController from '../controllers/health.controller';

const router = Router();

// Health check simples
router.get('/', healthController.check);

export default router;
