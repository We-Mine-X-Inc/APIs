import { InventoryItemStatus, InventoryItemType, OperationalMetadata } from "../../business-logic-interfaces/farm-maintenance/inventory-item.interface";
import { Types } from "mongoose";
export declare class CreateInventoryItemDto {
    type?: InventoryItemType;
    status?: InventoryItemStatus;
    model?: string;
    operationalDependencies?: Types.ObjectId[];
    operationalMetadata?: OperationalMetadata;
}
//# sourceMappingURL=inventory-item.dto.d.ts.map