import { Customer } from "../../business-logic-interfaces/farm-maintenance/customer.interface";
import { Miner } from "../../business-logic-interfaces/farm-maintenance/miner.interface";
import { MinerApiType, MinerStatus, RackLocation } from "../../business-logic-interfaces/farm-maintenance/hosted-miner.interface";
import { Types } from "mongoose";
export declare class CreateHostedMinerRequestDto {
    owner?: Customer;
    miner?: Miner;
    macAddress?: string;
    ipAddress?: string;
    API?: MinerApiType;
    status?: MinerStatus;
    rackLocation?: RackLocation;
}
export interface CreateMinerRequest {
    owner: Customer;
    miner: Miner;
    macAddress: string;
    ipAddress: string;
    API: MinerApiType;
    status: MinerStatus;
    rackLocation: RackLocation;
}
export declare class UpdateHostedMinerRequestDto {
    hostedMinerId?: Types.ObjectId;
    ipAddress?: string;
    API?: MinerApiType;
    status?: MinerStatus;
    rackLocation?: RackLocation;
}
export interface UpdateHostedMinerRequest {
    hostedMinerId: Types.ObjectId;
    ipAddress?: string;
    API?: MinerApiType;
    status?: MinerStatus;
    rackLocation?: RackLocation;
}
//# sourceMappingURL=hosted-miner.dto.d.ts.map