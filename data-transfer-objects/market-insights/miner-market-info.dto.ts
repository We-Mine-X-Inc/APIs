import { CoinType } from "@market-insights-interfaces/coin-market-info.interface";
import { InventoryItem } from "@farm-maintenance-interfaces/inventory-item.interface";
import { IsEnum, IsNumber, IsObject, IsOptional } from "class-validator";

export class CreateMinerMarketInfoDto {
  @IsOptional()
  @IsEnum(CoinType)
  public coinType?: CoinType;

  @IsOptional()
  @IsObject()
  public minerInventoryItem?: InventoryItem;

  @IsOptional()
  @IsNumber()
  public dailyCoinEarning?: number;
}
