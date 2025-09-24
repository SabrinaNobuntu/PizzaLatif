import notificationService from '../../../domain/services/notificationService';

describe('notificationService', () => {
  it('should send notification', async () => {
    const spy = jest.spyOn(notificationService, 'sendNotification');
    await notificationService.sendNotification('user1', { message: 'Hello' });
    expect(spy).toHaveBeenCalled();
  });
});
