import request from 'supertest';
import app from '../../../app';

describe('ordersController', () => {
  it('should return 200 on GET /orders', async () => {
    const res = await request(app).get('/orders');
    expect(res.status).toBe(200);
  });
});
