import { InventoryItemStatus } from "../../business-logic-interfaces/farm-maintenance/inventory-item";
import { MinerOperationDetails } from "../../interfaces";
import { Types } from "mongoose";
export declare class CreateMinerRequestDto {
    status?: InventoryItemStatus;
    model?: string;
    details?: Types.ObjectId;
    metadata?: MinerOperationDetails;
}
export interface CreateMinerReqeust {
    status: InventoryItemStatus;
    model: string;
    details: Types.ObjectId;
    metadata?: MinerOperationDetails;
}
//# sourceMappingURL=miner.dto.d.ts.map