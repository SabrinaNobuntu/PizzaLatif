import { errorHandler } from '../../../infra/http/middlewares/errorHandler.middleware';
import { Request, Response } from 'express';

describe('errorHandler', () => {
  it('should return error JSON', () => {
    const req = {} as Request;
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() } as unknown as Response;
    const error = { statusCode: 400, message: 'Error' } as any;
    errorHandler(error, req, res, jest.fn());
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ status: 'error', statusCode: 400, message: 'Error' });
  });
});
