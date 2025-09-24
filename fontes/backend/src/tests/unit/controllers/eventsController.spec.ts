import request from 'supertest';
import app from '../../../app';

describe('eventsController', () => {
  it('should return 200 on GET /events', async () => {
    const res = await request(app).get('/events');
    expect(res.status).toBe(200);
  });
});
