'use strict';

const { ZwaveDevice } = require('homey-zwavedriver');

class ThermostatDevice extends ZwaveDevice {

  async onNodeInit() {
    this.log('Device Init');
    this.registerCapability('measure_battery', 'BATTERY');
    this.registerCapability('measure_temperature', 'SENSOR_MULTILEVEL');
    this.registerCapability('target_temperature', 'THERMOSTAT_SETPOINT');

    // Enable temperature sensor by default
    await this.configurationSet({ index: 1, size: 1, signed: false }, 255);
  }

}

module.exports = ThermostatDevice;
