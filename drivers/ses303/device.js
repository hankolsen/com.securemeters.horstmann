'use strict';

const { ZwaveDevice } = require('homey-zwavedriver');

class SES303Device extends ZwaveDevice {
  async onNodeInit() {
    this.log('SES303Device Init');
    this.enableDebug();

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

    if (this.node.MultiChannelNodes[2]) {
      this.registerCapability('measure_temperature.external1', 'SENSOR_MULTILEVEL', {
        multiChannelNodeId: 2,
        getOpts: {
          getOnOnline: true,
          getOnStart: false,
        },
      });
    }

    if (this.node.MultiChannelNodes[3]) {
      this.registerCapability('measure_temperature.external2', 'SENSOR_MULTILEVEL', {
        multiChannelNodeId: 3,
        getOpts: {
          getOnOnline: true,
          getOnStart: false,
        },
      });
    }

    if (this.node.MultiChannelNodes[4]) {
      this.registerCapability('measure_temperature.external3', 'SENSOR_MULTILEVEL', {
        multiChannelNodeId: 4,
        getOpts: {
          getOnOnline: true,
          getOnStart: false,
        },
      });
    }

    if (this.node.MultiChannelNodes[5]) {
      this.registerCapability('measure_temperature.external4', 'SENSOR_MULTILEVEL', {
        multiChannelNodeId: 5,
        getOpts: {
          getOnOnline: true,
          getOnStart: false,
        },
      });
    }
  }
}

module.exports = SES303Device;
