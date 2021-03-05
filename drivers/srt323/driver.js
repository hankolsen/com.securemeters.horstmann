'use strict';

const Homey = require('homey');

class SRT323Driver extends Homey.Driver {

  async onInit() {
    this.log('SRT323Driver initialized');
  }

  async onPairListDevices() {
    return [
      {
        name: 'SRT323 Thermostat',
        data: {
          id: 'srt323Id',
        },
      },
    ];
  }

}

module.exports = SRT323Driver;
