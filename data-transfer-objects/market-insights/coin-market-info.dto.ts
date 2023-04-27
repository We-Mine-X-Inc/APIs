import { CoinType } from "@market-insights-interfaces/coin-market-info.interface";
import { IsEnum, IsNumber, IsOptional } from "class-validator";

export class CreateCoinMarketInfoDto {
  @IsOptional()
  @IsEnum(CoinType)
  public coinType?: CoinType;

  @IsOptional()
  @IsNumber()
  public coinPrice?: number;
}
