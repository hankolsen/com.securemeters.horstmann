interface GetOpts {
  getOnStart?: boolean;
  getOnOnline?: boolean;
  pollInterval?: number | string;
  pollMultiplication?: number;
}

interface UserOpts {
  get?: string;
  getParser?: string;
  getOpts?: GetOpts;
  set?: string;
  setParser?: (value: number | boolean | string) => { [key: string]: any };
  reportParser?: (report: any) => any;
  setParserV1?: (value: number | boolean | string) => { [key: string]: any };
  reportParserV1?: (report: any) => any;
  multiChannelNodeId?: number;
}

interface ConfigurationSetOptions {
  index?: number;
  size: number;
  id?: number;
  signed?: boolean;
  useSettingsParser?: boolean;
}

declare module 'homey-zwavedriver' {
  import * as Homey from 'homey';

  class ZwaveDevice extends Homey.Device {
    node: Homey.ZwaveNode;
    enableDebug: () => void;
    printNodeSummary: () => void;

    registerCapability(
      capabilityId: string,
      commandClassId: string,
      userOpts?: UserOpts,
    ): void;

    configurationSet(
      options: ConfigurationSetOptions,
      value: any,
    ): Promise<any>;
  }

  export = ZwaveDevice;
}
