import pollerService from '../../../domain/services/pollerService';
import eventRepository from '../../../domain/repositories/eventRepository';
import { mockEvents } from '../../fixtures/events.fixture';

jest.mock('../../../repositories/eventRepository');

describe('pollerService', () => {
  it('should store fetched events', async () => {
    jest.spyOn(eventRepository, 'create').mockResolvedValue(mockEvents[0] as any);
    await pollerService.pollEvents();
    expect(eventRepository.create).toHaveBeenCalled();
  });
});
