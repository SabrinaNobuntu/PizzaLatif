import orderService from '../../../domain/services/';
import { mockOrders } from '../../fixtures/pedido.fixture';

describe('orderService', () => {
  it('should process order', async () => {
    const result = await orderService.processOrder(mockOrders[0]);
    expect(result.status).toBeDefined();
  });
});
