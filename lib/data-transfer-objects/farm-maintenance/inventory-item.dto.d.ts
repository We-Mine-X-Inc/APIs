import { InventoryItemStatus, InventoryItemType, OperationalMetadata } from "../../business-logic-interfaces/farm-maintenance/miner.interface";
import { Types } from "mongoose";
export declare class CreateInventoryItemRequestDto {
    type?: InventoryItemType;
    status?: InventoryItemStatus;
    model?: string;
    operationalDependencies: Types.ObjectId[];
    operationalMetadata?: OperationalMetadata;
}
export interface CreateInventoryItemReqeust {
    type: InventoryItemType;
    status: InventoryItemStatus;
    model: string;
    operationalDependencies: Types.ObjectId[];
    operationalMetadata?: OperationalMetadata;
}
//# sourceMappingURL=inventory-item.dto.d.ts.map