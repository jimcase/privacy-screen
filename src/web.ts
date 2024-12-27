import { WebPlugin } from '@capacitor/core';

import type { PrivacyScreenPlugin } from './definitions';

export class PrivacyScreenWeb extends WebPlugin implements PrivacyScreenPlugin {
  async disablePrivacyScreen(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async disableScreenshotProtection(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async enablePrivacyScreen(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  enableScreenshotProtection(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }
}
