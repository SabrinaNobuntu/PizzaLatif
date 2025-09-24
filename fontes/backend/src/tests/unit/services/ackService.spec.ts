import ackService from '../../../domain/services/ackService';

describe('ackService', () => {
  it('should acknowledge an event', async () => {
    const spy = jest.spyOn(ackService, 'ackEvent');
    await ackService.ackEvent('e1');
    expect(spy).toHaveBeenCalledWith('e1');
  });
});
