'use strict';

const { ZwaveDevice } = require('homey-zwavedriver');

class SES302Device extends ZwaveDevice {
  async onNodeInit() {
    this.log('SES302Device Init');
    this.registerCapability('measure_battery', 'BATTERY');
    this.registerCapability('measure_temperature', 'SENSOR_MULTILEVEL', {
      getOpts: {
        getOnOnline: true,
        getOnStart: false,
      },
    });
  }
}

module.exports = SES302Device;
