'use strict';

const { ZwaveDevice } = require('homey-zwavedriver');

class SRT323Device extends ZwaveDevice {

  async onNodeInit() {
    this.enableDebug();
    this.log('SRT323Device Init');
    this.printNodeSummary();
    this.registerCapability('measure_battery', 'BATTERY');
    this.registerCapability('measure_temperature', 'SENSOR_MULTILEVEL');
    this.registerCapability('target_temperature', 'THERMOSTAT_SETPOINT');

    // Enable temperature sensor by default
    await this.configurationSet({ index: 1, size: 1, signed: false }, 255);
  }

  onAdded() {
    this.log('SRT323Device Added');
    super.onAdded();
  }

  onDeleted() {
    this.log('SRT323Device Deleted');
    return super.onDeleted();
  }

}

module.exports = SRT323Device;
