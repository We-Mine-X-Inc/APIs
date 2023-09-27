import { MinerErrorType, PoolSwitchErrorInfo } from "../../interfaces";
export declare class CreateMinerErrorRequestDto {
    type?: MinerErrorType;
    poolSwitchErrorInfo?: PoolSwitchErrorInfo;
    stackTrace?: string;
}
export interface CreateMinerErrorReqeust {
    type: MinerErrorType;
    poolSwitchErrorInfo?: PoolSwitchErrorInfo;
    stackTrace?: string;
}
//# sourceMappingURL=miner-error.dto.d.ts.map