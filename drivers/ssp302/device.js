'use strict';

const { ZwaveDevice } = require('homey-zwavedriver');

class SSP302Device extends ZwaveDevice {
  async onNodeInit() {
    this.log('SSP302Device Init');

    this.registerCapability('onoff', 'SWITCH_BINARY');
  }
}

module.exports = SSP302Device;
