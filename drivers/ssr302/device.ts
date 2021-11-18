import ZwaveDevice from 'homey-zwavedriver';

class SSR302Device extends ZwaveDevice {
  async onNodeInit() {
    this.log('SSR302Device Init');

    this.registerCapability('onoff', 'SWITCH_BINARY');
  }
}

module.exports = SSR302Device;
