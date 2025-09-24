import config from '../config';

export function trackEvent(eventName: string, payload: object) {
  config.logger.info(`Telemetry event: ${eventName}`, payload);
}
