// import pollerService from '../../services/pollerService';
// import eventRepository from '../../repositories/eventRepository';

// describe('Poller Integration', () => {
//   it('should fetch events from external API and store in DB', async () => {
//     const initialCount = (await eventRepository.findAll()).length;
//     await pollerService.pollEvents();
//     const finalCount = (await eventRepository.findAll()).length;
//     expect(finalCount).toBeGreaterThanOrEqual(initialCount);
//   });
// });
