class TokenCacheService {
  private token: string | null = null;
  private expiresAt: number = 0;

  getToken(): string | null {
    if (this.token && Date.now() < this.expiresAt) {
      return this.token;
    }
    return null;
  }

  setToken(token: string, expiresIn: number) {
    this.token = token;
    this.expiresAt = Date.now() + expiresIn * 1000 - 5000; // 5s antes de expirar
  }
}

export default new TokenCacheService();
