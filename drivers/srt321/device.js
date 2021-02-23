'use strict';

const { ZwaveDevice } = require('homey-zwavedriver');

class SRT321Device extends ZwaveDevice {

  async onNodeInit() {
    this.log('Device Init');
    this.registerCapability('measure_battery', 'BATTERY');
    this.registerCapability('measure_temperature', 'SENSOR_MULTILEVEL');
    this.registerCapability('target_temperature', 'THERMOSTAT_SETPOINT');

    // this.registerSetting('enable_temperature_sensor', value => (value === true ? 255 : 0));

    // Set configuration value that is not defined in manifest
    await this.configurationSet({ index: 1, size: 1, signed: false }, 255);
  }

}

module.exports = SRT321Device;
