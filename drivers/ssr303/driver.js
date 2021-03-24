'use strict';

const Homey = require('homey');

class SSR303Driver extends Homey.Driver {

  async onInit() {
    this.log('SSR303Driver initialized');
  }

  async onPairListDevices() {
    return [
      {
        name: 'SSR303 Switch',
        data: {
          id: 'ssr303Id',
        },
      },
    ];
  }

}

module.exports = SSR303Driver;
