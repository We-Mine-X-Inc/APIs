import { PoolRevenue } from "@farm-metrics-interfaces/pool-revenue.interface";
import { Revenue } from "@farm-metrics-interfaces/performance/revenue.interface";
import {
  TimeRange,
  TimeSingleton,
} from "@farm-metrics-interfaces/performance/time.interface";
import { IsArray, IsObject, IsOptional } from "class-validator";

export class AddPoolRevenueDto {
  @IsOptional()
  @IsObject()
  public poolUsername?: string;

  @IsOptional()
  @IsObject()
  public timeRange?: TimeRange;

  @IsOptional()
  @IsObject()
  public cummulativeProfits?: Revenue;
}

export class ListPoolRevenueRequestDto {
  @IsArray()
  public poolUsernames: string[] = [];

  @IsOptional()
  @IsObject()
  public timeRange?: TimeRange;

  @IsOptional()
  @IsObject()
  public timeSingleton?: TimeSingleton;
}

export class ListPoolRevenueResponseDto {
  @IsArray()
  public poolRevenues: PoolRevenue[] = [];
}
