import { CoinType } from "@market-insights-interfaces/coin-market-info.interface";
import { InventoryItem } from "@farm-maintenance-interfaces/inventory-item.interface";
import { IsEnum, IsNumber, IsObject } from "class-validator";

export class CreateMinerMarketInfoRequestDto {
  @IsEnum(CoinType)
  public coinType?: CoinType;

  @IsObject()
  public minerInventoryItem?: InventoryItem;

  @IsNumber()
  public dailyCoinEarning?: number;
}

export interface CreateMinerMarketInfoRequest {
  coinType: CoinType;
  minerInventoryItem: InventoryItem;
  dailyCoinEarning: number;
}
