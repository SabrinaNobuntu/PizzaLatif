import HttpClient from './httpClient';
import config from '../config';
import authService from '../../src/domain/services/authService';

class OpenDeliveryClient {
  private client: HttpClient;

  constructor() {
    this.client = new HttpClient(config.openDelivery.API_URL, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  // Adiciona token Bearer antes de cada requisição
  private async getAuthHeaders() {
    const token = await authService.getAccessToken(); // retorna token OAuth2
    return {
      Authorization: `Bearer ${token}`,
    };
  }

  async get<T>(path: string, params?: Record<string, any>): Promise<T> {
    const headers = await this.getAuthHeaders();
    const response = await this.client.get<T>(path, { headers, params });
    return response.data;
  }

  async post<T>(path: string, body?: any): Promise<T> {
    const headers = await this.getAuthHeaders();
    const response = await this.client.post<T>(path, body, { headers });
    return response.data;
  }

  async put<T>(path: string, body?: any): Promise<T> {
    const headers = await this.getAuthHeaders();
    const response = await this.client.put<T>(path, body, { headers });
    return response.data;
  }

  async delete<T>(path: string): Promise<T> {
    const headers = await this.getAuthHeaders();
    const response = await this.client.delete<T>(path, { headers });
    return response.data;
  }

  // Aqui você pode adicionar métodos específicos da Open Delivery, ex:
  // async getOrders(...) { ... }
  // async getMerchants(...) { ... }
}

export default new OpenDeliveryClient();
