'use strict';

const { ZwaveDevice } = require('homey-zwavedriver');

class SRT321Device extends ZwaveDevice {

  async onNodeInit() {
    this.log('Device Init');
    this.registerCapability('measure_battery', 'BATTERY');
    this.registerCapability('measure_temperature', 'SENSOR_MULTILEVEL');
    this.registerCapability('target_temperature', 'THERMOSTAT_SETPOINT');

    this.registerSetting('enable_temperature_sensor', value => (value === true ? 255 : 0));
    this.registerSetting('temperature_unit', value => (value === 'celsius' ? 0 : 255));

    // Set configuration value that is defined in manifest
    await this.configurationSet({ id: 'enable_temperature_sensor' }, 255);
    await this.configurationSet({ id: 'temperature_unit' }, 0);
  }

}

module.exports = SRT321Device;
