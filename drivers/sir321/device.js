'use strict';

const { ZwaveDevice } = require('homey-zwavedriver');

class SIR321Device extends ZwaveDevice {
  async onInit() {
    this.log('SIR321Device has been initialized');
    this.registerCapability('onoff', 'SWITCH_BINARY');
    this.registerCapability('measure_temperature', 'SENSOR_MULTILEVEL');
  }
}

module.exports = SIR321Device;
