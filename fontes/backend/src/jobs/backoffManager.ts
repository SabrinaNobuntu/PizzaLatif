export class BackoffManager {
  static async retry<T>(fn: () => Promise<T>, retries = 3, delay = 1000): Promise<T> {
    try {
      return await fn();
    } catch (err) {
      if (retries === 0) throw err;
      await new Promise((res) => setTimeout(res, delay));
      return this.retry(fn, retries - 1, delay * 2);
    }
  }
}
