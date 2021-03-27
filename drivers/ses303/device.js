'use strict';

const { ZwaveDevice } = require('homey-zwavedriver');

class SES303Device extends ZwaveDevice {

  async onNodeInit() {
    this.log('SES303Device Init');
    this.registerCapability('measure_battery', 'BATTERY');
    this.registerCapability('measure_temperature', 'SENSOR_MULTILEVEL', {
      getOpts: {
        getOnOnline: true,
        getOnStart: false,
      },
    });
    this.registerCapability('measure_humidity', 'SENSOR_MULTILEVEL', {
      getOpts: {
        getOnOnline: true,
        getOnStart: false,
      },
    });
  }

}

module.exports = SES303Device;
