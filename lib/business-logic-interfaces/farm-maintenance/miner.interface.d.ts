import { Types } from "mongoose";
import { Contract } from "./contract.interface";
import { Customer } from "./customer.interface";
import { InventoryItem } from "./inventory-item.interface";
export declare enum MinerNetworkStatus {
    UNKNOWN = 0,
    OFFLINE = 1,
    ONLINE = 2
}
export type MinerStatus = {
    lastOnlineDateInMillis: number;
    networkStatus: MinerNetworkStatus;
    poolIsBeingSwitched: boolean;
};
export type RackLocation = {
    facility: Types.ObjectId;
    rack: string;
    slot: string;
};
export declare enum MinerApiType {
    UNKNOWN = 0,
    ANTMINER = 1,
    GOLDSHELL = 2,
    BRAIINS = 3
}
export interface Miner {
    _id: Types.ObjectId;
    friendlyMinerId: string;
    owner: Customer;
    inventoryItem: InventoryItem;
    ipAddress: string;
    macAddress: string;
    API: MinerApiType;
    status: MinerStatus;
    rackLocation: RackLocation;
    activeContract: Contract;
}
export declare const MINER_FILEDS_TO_POPULATE: ({
    path: string;
    populate?: never;
} | {
    path: string;
    populate: {
        path: string;
    };
})[];
//# sourceMappingURL=miner.interface.d.ts.map