import Homey from 'homey';

class SecureHorstmannApp extends Homey.App {
  /**
   * onInit is called when the app is initialized.
   */
  async onInit() {
    this.log('SecureHorstmannApp has been initialized');
  }
}

module.exports = SecureHorstmannApp;
