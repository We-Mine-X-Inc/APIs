import { Customer } from "../../business-logic-interfaces/farm-maintenance/customer.interface";
import { InventoryItem } from "../../business-logic-interfaces/farm-maintenance/inventory-item.interface";
import { MinerApiType, MinerStatus, RackLocation } from "../../business-logic-interfaces/farm-maintenance/miner.interface";
import { Types } from "mongoose";
export declare class CreateMinerRequestDto {
    owner?: Customer;
    inventoryItem?: InventoryItem;
    macAddress?: string;
    ipAddress?: string;
    API?: MinerApiType;
    status?: MinerStatus;
    rackLocation?: RackLocation;
}
export interface CreateMinerRequest {
    owner: Customer;
    inventoryItem: InventoryItem;
    macAddress: string;
    ipAddress: string;
    API: MinerApiType;
    status: MinerStatus;
    rackLocation: RackLocation;
}
export declare class UpdateMinerRequestDto {
    minerId?: Types.ObjectId;
    ipAddress?: string;
    API?: MinerApiType;
    status?: MinerStatus;
    rackLocation?: RackLocation;
}
export interface UpdateMinerRequest {
    minerId: Types.ObjectId;
    ipAddress?: string;
    API?: MinerApiType;
    status?: MinerStatus;
    rackLocation?: RackLocation;
}
//# sourceMappingURL=miner.dto.d.ts.map