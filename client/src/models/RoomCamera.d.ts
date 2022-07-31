interface IWidthConstraint {
  min: number;
  ideal: number;
  max: number;
}

interface IHeightConstraint extends IWidthConstraint {}
interface IFrameConstraint extends IWidthConstraint {}
interface IDeviceIDConstraint {
  exact: string;
}
interface IConstraint {
  video: {
    width: IWidthConstraint;
    height: IHeightConstraint;
    frameRate: IFrameConstraint;
    deviceId?: IDeviceIDConstraint;
  };
  audio: {
    sampleSize: number;
    channelCount: number;
  };
}
