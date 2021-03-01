'use strict';

const { ZwaveDevice } = require('homey-zwavedriver');

class SSR303Device extends ZwaveDevice {

  async onNodeInit() {
    this.registerCapability('on_off', 'SWITCH_BINARY');
  }

}

module.exports = SSR303Device;
