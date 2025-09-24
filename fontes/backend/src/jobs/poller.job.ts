import pollerService from '../domain/services/pollerService';

export async function startPolling() {
  setInterval(async () => {
    try {
      await pollerService.pollEvents();
    } catch (error) {
      console.error('Polling job error:', error);
    }
  }, 30000); // a cada 30s
}
