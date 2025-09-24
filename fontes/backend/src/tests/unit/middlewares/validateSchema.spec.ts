import { orderSchema } from '../../../utils/validationSchemas';

describe('validateSchema', () => {
  it('should validate order schema', () => {
    const order = { id: 'o1', merchantId: 'm1', status: 'pending' };
    const { error } = orderSchema.validate(order);
    expect(error).toBeUndefined();
  });
});
