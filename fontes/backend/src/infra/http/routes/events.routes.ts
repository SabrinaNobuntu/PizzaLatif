import { Router } from 'express';
import eventsController from '../controllers/events.controller';

const router = Router();

// Rota para iniciar o polling manualmente (opcional)
router.get('/poll', eventsController.poll);

// Rota para dar ack em um evento específico
router.post('/:id/ack', eventsController.ack);

export default router;
