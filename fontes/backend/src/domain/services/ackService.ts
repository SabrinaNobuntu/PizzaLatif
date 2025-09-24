import openDeliveryClient from '../../clients/openDeliveryClient';

class AckService {
  async ackEvent(eventId: string) {
    await openDeliveryClient.post(`/events/${eventId}/ack`);
  }
}

export default new AckService();
