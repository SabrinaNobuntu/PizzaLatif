import request from 'supertest';
import app from '../../../app';

describe('merchantsController', () => {
  it('should return 200 on GET /merchants', async () => {
    const res = await request(app).get('/merchants');
    expect(res.status).toBe(200);
  });
});
