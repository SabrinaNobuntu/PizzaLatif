// import authService from '../../../domain/services/authService';
// import tokenRepository from '../../../domain/repositories/tokenRepository';
// import { mockToken } from '../../fixtures/auth.fixture';

// jest.mock('../../../repositories/tokenRepository');

// describe('authService', () => {
//   it('should return a valid token', async () => {
//     jest.spyOn(tokenRepository, 'findValidToken').mockResolvedValue(null);
//     jest.spyOn(tokenRepository, 'create').mockResolvedValue(mockToken as any);
//     const token = await authService.getToken();
//     expect(token.accessToken).toBeDefined();
//   });
// });
