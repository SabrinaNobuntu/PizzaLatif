export interface OpenDeliveryOrder {
  id: string;
  merchantId: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  payload: object;
}
