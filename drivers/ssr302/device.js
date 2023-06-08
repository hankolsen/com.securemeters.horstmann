'use strict';

const { ZwaveDevice } = require('homey-zwavedriver');

class SSR302Device extends ZwaveDevice {
  async onNodeInit() {
    this.log('SSR302Device Init');

    this.registerCapability('onoff', 'SWITCH_BINARY', {
      getOpts: {
        // Only use these options when a device doesn't automatically report its values
        getOnStart: true, // get the initial value on app start (only use for non-battery devices)
        // getOnOnline: true, // use only for battery devices
        pollInterval: 'poll_frequency', // poll every 30s
        pollMultiplication: 1000,
      },
      getParserV3: (value, opts) => ({}),
    });
  }
}

module.exports = SSR302Device;
