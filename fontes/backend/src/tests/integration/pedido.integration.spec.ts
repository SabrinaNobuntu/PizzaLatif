import pollerService from '../../domain/services/pollerService';
import eventRepository from '../../domain/repositories/eventRepository';

describe('Poller Integration', () => {
  it('should store events fetched from API', async () => {
    const initialCount = (await eventRepository.findAll()).length;
    await pollerService.pollEvents();
    const finalCount = (await eventRepository.findAll()).length;
    expect(finalCount).toBeGreaterThanOrEqual(initialCount);
  });
});
