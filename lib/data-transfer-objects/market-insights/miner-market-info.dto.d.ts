import { CoinType } from "../../business-logic-interfaces/market-insights/coin-market-info.interface";
import { InventoryItem } from "../../business-logic-interfaces/farm-maintenance/inventory-item.interface";
export declare class CreateMinerMarketInfoRequestDto {
    coinType?: CoinType;
    minerInventoryItem?: InventoryItem;
    dailyCoinEarning?: number;
}
export interface CreateMinerMarketInfoRequest {
    coinType: CoinType;
    minerInventoryItem: InventoryItem;
    dailyCoinEarning: number;
}
//# sourceMappingURL=miner-market-info.dto.d.ts.map