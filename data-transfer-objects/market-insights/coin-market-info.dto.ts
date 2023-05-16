import { CoinType } from "@market-insights-interfaces/coin-market-info.interface";
import { IsEnum, IsNumber } from "class-validator";

export class CreateCoinMarketInfoRequestDto {
  @IsEnum(CoinType)
  public coinType?: CoinType;

  @IsNumber()
  public coinPrice?: number;
}

export interface CreateCoinMarketInfoRequest {
  coinType: CoinType;
  coinPrice: number;
}

export class ListCoinMarketInfoRequestDto {
  @IsEnum(CoinType)
  public coinType?: CoinType;
}

export interface ListCoinMarketInfoRequest {
  coinType: CoinType;
}
