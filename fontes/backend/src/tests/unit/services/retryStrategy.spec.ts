// import { BackoffManager } from '../../../domain/services/retryStrategy';

// describe('BackoffManager', () => {
//   it('should retry failed function', async () => {
//     let count = 0;
//     const fn = jest.fn(async () => {
//       count++;
//       if (count < 2) throw new Error('fail');
//       return 'ok';
//     });
//     const result = await BackoffManager.retry(fn, 3, 10);
//     expect(result).toBe('ok');
//   });
// });
