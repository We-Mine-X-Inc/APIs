import { Customer } from "../../business-logic-interfaces/farm-maintenance/customer.interface";
import { InventoryItem } from "../../business-logic-interfaces/farm-maintenance/inventory-item.interface";
import { MinerApiType, MinerStatus, RackLocation } from "../../business-logic-interfaces/farm-maintenance/miner.interface";
import { Types } from "mongoose";
export declare class MutableMinerFields {
    owner?: Customer;
    inventoryItem?: InventoryItem;
    macAddress?: string;
    ipAddress?: string;
    API?: MinerApiType;
    status?: MinerStatus;
    rackLocation?: RackLocation;
}
export declare class CreateMinerDto {
    initialFields?: MutableMinerFields;
}
export declare class UpdateMinerDto {
    minerId?: Types.ObjectId;
    mutatedFields?: MutableMinerFields;
}
//# sourceMappingURL=miner.dto.d.ts.map