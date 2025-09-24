import axios from 'axios';
import config from '../../config';
import tokenCacheService from './tokenCacheService';

class AuthService {
  private clientId = config.openDelivery.CLIENT_ID;
  private clientSecret = config.openDelivery.CLIENT_SECRET;
  private tokenUrl = `${config.openDelivery.API_URL}/oauth2/token`;

  async getAccessToken(): Promise<string> {
    // Tenta pegar token do cache
    const cached = tokenCacheService.getToken();
    if (cached) return cached;

    // Solicita novo token
    const response = await axios.post(this.tokenUrl, null, {
      params: {
        grant_type: 'client_credentials',
        client_id: this.clientId,
        client_secret: this.clientSecret,
      },
    });

    const token = response.data.access_token;
    tokenCacheService.setToken(token, response.data.expires_in);
    return token;
  }
}

export default new AuthService();
