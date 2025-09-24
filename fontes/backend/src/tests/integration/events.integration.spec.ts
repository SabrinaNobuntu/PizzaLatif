import request from 'supertest';
import app from '../../app';

describe('Events Integration', () => {
  it('should get events from API', async () => {
    const res = await request(app).get('/events');
    expect(res.status).toBe(200);
  });
});
