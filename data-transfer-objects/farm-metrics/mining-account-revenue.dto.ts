import { MiningAccountRevenue } from "@/business-logic-interfaces/farm-metrics/mining-account-revenue.interface";
import { EconomicValue } from "@farm-metrics-interfaces/performance/revenue.interface";
import {
  TimeRange,
  TimeSingleton,
} from "@farm-metrics-interfaces/performance/time.interface";
import { IsArray, IsObject } from "class-validator";

export class AddMiningAccountRevenueRequestDto {
  @IsObject()
  public poolUsername?: string;

  @IsObject()
  public timeRange?: TimeRange;

  @IsObject()
  public cummulativeProfits?: EconomicValue;
}

export interface AddMiningAccountRevenueRequest {
  poolUsername: string;
  timeRange: TimeRange;
  cummulativeProfits: EconomicValue;
}

export class ListMiningAccountRevenueRequestDto {
  @IsArray()
  public accountUsernames: string[] = [];

  @IsObject()
  public timeRange?: TimeRange;

  @IsObject()
  public timeSingleton?: TimeSingleton;
}

export interface ListMiningAccountRevenueRequest {
  accountUsernames: string[];
  timeRange: TimeRange;
  timeSingleton: TimeSingleton;
}

export class ListMinerAccountRevenueResponseDto {
  @IsArray()
  public accountRevenues: MiningAccountRevenue[] = [];
}

export interface ListMinerAccountRevenueResponse {
  accountRevenues: MiningAccountRevenue[];
}
