// import openDeliveryClient from '../../clients/openDeliveryClient';
// import ackService from './ackService';
// import config from '../../config';

// class PollerService {
//   private intervalMs = 5000;

//   async pollEvents() {
//     try {
//       const events = await openDeliveryClient.get('/events:polling');
//       for (const event of events) {
//         console.log('Evento recebido:', event);
//         await ackService.ackEvent(event.id);
//       }
//     } catch (err) {
//       config.logger.error('Erro no pollerService', err);
//     }
//   }

//   start() {
//     setInterval(() => this.pollEvents(), this.intervalMs);
//   }
// }

// export default new PollerService();
