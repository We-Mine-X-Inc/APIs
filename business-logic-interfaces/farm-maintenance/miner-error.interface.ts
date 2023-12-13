import { Types } from "mongoose";

export enum MinerErrorType {
  UNKNOWN_MINER_ERROR_TYPE = 0,
  HASH_RATE_ERROR = 1,
  POOL_SWITCH_ERROR = 2,
  TEMPERATURE_ERROR = 3,
  FAN_SPEED_ERROR = 4,
}

export interface PoolSwitchErrorInfo {
  minerId: Types.ObjectId;
  fromPoolId: Types.ObjectId;
  toPoolId: Types.ObjectId;
}

export interface MinerError {
  _id: Types.ObjectId;
  type: MinerErrorType;
  environmentConfigId: Types.ObjectId;
  poolSwitchErrorInfo?: PoolSwitchErrorInfo;
  stackTrace: string;
}
