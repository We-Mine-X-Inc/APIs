import { InventoryItemStatus } from "../../business-logic-interfaces/farm-maintenance/inventory-item";
import { MinerOperationsMetadata } from "../../interfaces";
import { Types } from "mongoose";
export declare class CreateMinerRequestDto {
    status?: InventoryItemStatus;
    model?: string;
    details?: Types.ObjectId;
    metadata?: MinerOperationsMetadata;
}
export interface CreateMinerReqeust {
    status: InventoryItemStatus;
    model: string;
    details: Types.ObjectId;
    metadata?: MinerOperationsMetadata;
}
//# sourceMappingURL=miner.dto.d.ts.map