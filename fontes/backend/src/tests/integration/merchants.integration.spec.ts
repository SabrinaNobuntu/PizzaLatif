import request from 'supertest';
import app from '../../app';

describe('Merchants Integration', () => {
  it('should get merchants from API', async () => {
    const res = await request(app).get('/merchants');
    expect(res.status).toBe(200);
  });
});
