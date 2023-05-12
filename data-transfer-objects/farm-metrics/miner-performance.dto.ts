import { Miner } from "@farm-maintenance-interfaces/miner.interface";
import { HashRate } from "@farm-metrics-interfaces/performance/hash-rate.interface";
import { EconomicValue as EconomicValue } from "@farm-metrics-interfaces/performance/revenue.interface";
import { TimeRange } from "@farm-metrics-interfaces/performance/time.interface";
import { IsArray, IsNumber, IsObject, IsOptional } from "class-validator";
import { Types } from "mongoose";

export class MinerPerformanceRequestDto {
  @IsObject()
  public minerId?: Types.ObjectId;

  @IsObject()
  public timeRange?: TimeRange;
}

export interface MinerPerformanceRequest {
  minerId: Types.ObjectId;
  timeRange: TimeRange;
}

export class MinerPerformanceResponseDto {
  @IsObject()
  public miner?: Miner;

  @IsObject()
  public timeRange?: TimeRange;

  @IsNumber()
  public profits?: EconomicValue;

  @IsOptional()
  @IsNumber()
  public averageHashRate?: HashRate;

  @IsArray()
  public contributionRatios: CalculatedWorkerContribution[] = [];
}

export interface MinerPerformanceResponse {
  miner: Miner;
  timeRange: TimeRange;
  profits: EconomicValue;
  averageHashRate: HashRate;
  contributionRatios: CalculatedWorkerContribution[];
}

export type CalculatedWorkerContribution = {
  accountUsername: string;
  workerName: string;
  hashRate: HashRate;
  profit: EconomicValue;
  timeRange: TimeRange;
};

export type FlattenedWorkerContribution = {
  poolUsername: string;
  workerName: string;
  hashRate: HashRate;
  timeRange: TimeRange;
};
