import merchantService from '../../../domain/repositories/merchantRepository';
import { mockMerchants } from '../../fixtures/merchants.fixture';

describe('merchantService', () => {
  it('should return merchant by id', () => {
    const merchant = merchantService.getMerchantById('m1');
    expect(merchant).toEqual(mockMerchants[0]);
  });
});
