import { CoinType } from "../../business-logic-interfaces/market-insights/coin-market-info.interface";
export declare class CreateCoinMarketInfoRequestDto {
    coinType?: CoinType;
    coinPrice?: number;
}
export interface CreateCoinMarketInfoRequest {
    coinType: CoinType;
    coinPrice: number;
}
export declare class ListCoinMarketInfoRequestDto {
    coinType?: CoinType;
}
export interface ListCoinMarketInfoRequest {
    coinType: CoinType;
}
//# sourceMappingURL=coin-market-info.dto.d.ts.map