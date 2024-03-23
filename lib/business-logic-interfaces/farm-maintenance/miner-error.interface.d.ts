import { Types } from "mongoose";
export declare enum MinerErrorType {
    UNKNOWN_MINER_ERROR_TYPE = 0,
    HASH_RATE_ERROR = 1,
    POOL_SWITCH_ERROR = 2,
    TEMPERATURE_ERROR = 3,
    FAN_SPEED_ERROR = 4,
    POOL_STATUS_ERROR = 5,
    OFFLINE_ERROR = 6
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
//# sourceMappingURL=miner-error.interface.d.ts.map