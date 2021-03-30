'use strict';

const { ZwaveDevice } = require('homey-zwavedriver');

class SSR303Device extends ZwaveDevice {
  async onNodeInit() {
    this.log('SSR303Device Init');
    this.printNodeSummary();

    this.registerCapability('on_off', 'SWITCH_BINARY', {
      setParserV1: (value) => ({
        'Switch Value': value > 0 ? 255 : 0,
      }),
      reportParserV1: (report) => {
        if (!report || report.Value === undefined) {
          return null;
        }

        return report.Value === 255;
      },
    });
  }
}

module.exports = SSR303Device;
