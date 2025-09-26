// import { Request, Response } from 'express';
// import pollerService from '../../../domain/services/pollerService';
// import ackService from '../../../domain/services/ackService';
// import config from '../../../config';

// class EventsController {
//   // GET /events/poll
//   async poll(req: Request, res: Response) {
//     try {
//       await pollerService.pollEvents();
//       res.status(200).json({ message: 'Polling executed successfully' });
//     } catch (error: unknown) {
//       // Transformar erro em string
//       const errMsg = error instanceof Error ? error.message : JSON.stringify(error);
//       config.logger.error('Error polling events', errMsg);
//       res.status(500).json({ error: 'Error polling events' });
//     }
//   }

//   // POST /events/:id/ack
//   async ack(req: Request, res: Response) {
//     try {
//       const eventId = req.params.id;
//       await ackService.ackEvent(eventId);
//       res.status(200).json({ message: `Event ${eventId} acknowledged` });
//     } catch (error: unknown) {
//       const errMsg = error instanceof Error ? error.message : JSON.stringify(error);
//       config.logger.error(`Error acknowledging event ${req.params.id}`, errMsg);
//       res.status(500).json({ error: 'Error acknowledging event' });
//     }
//   }
// }

// export default new EventsController();