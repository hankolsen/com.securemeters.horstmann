'use strict';

const { ZwaveDevice } = require('homey-zwavedriver');

class SSR302Device extends ZwaveDevice {
  async onNodeInit() {
    this.log('SSR302Device Init');

    this.registerCapability('onoff', 'SWITCH_BINARY');

    if (this.node.MultiChannelNodes[2]) {
      this.registerCapability('onoff.channel2', 'SWITCH_BINARY', {
        multiChannelNodeId: 2,
      });
    }
  }
}

module.exports = SSR302Device;
