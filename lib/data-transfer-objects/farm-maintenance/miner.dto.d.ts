import { InventoryItemStatus } from "../../business-logic-interfaces/farm-maintenance/inventory-item";
import { MinerOperationsMetadata } from "../../interfaces";
export declare class CreateMinerRequestDto {
    status?: InventoryItemStatus;
    model?: string;
    metadata?: MinerOperationsMetadata;
}
export interface CreateMinerReqeust {
    status: InventoryItemStatus;
    model: string;
    metadata?: MinerOperationsMetadata;
}
//# sourceMappingURL=miner.dto.d.ts.map