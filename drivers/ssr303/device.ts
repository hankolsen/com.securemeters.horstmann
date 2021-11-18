import ZwaveDevice from 'homey-zwavedriver';

class SSR303Device extends ZwaveDevice {
  async onNodeInit() {
    this.log('SSR303Device Init');
    this.printNodeSummary();

    this.registerCapability('onoff', 'SWITCH_BINARY', {
      setParser: (value) => ({
        'Switch Value': value > 0 ? 255 : 0,
      }),
      reportParser: (report) => report.Value === 'on/enable',
      setParserV1: (value) => ({
        'Switch Value': value > 0 ? 255 : 0,
      }),
      reportParserV1: (report) => report.Value === 'on/enable',
    });
  }
}

module.exports = SSR303Device;
