import { Miner } from "@farm-maintenance-interfaces/miner.interface";
import { HashRate } from "@farm-metrics-interfaces/performance/hash-rate.interface";
import { Revenue } from "@farm-metrics-interfaces/performance/revenue.interface";
import { TimeRange } from "@farm-metrics-interfaces/performance/time.interface";
import { IsArray, IsNumber, IsObject, IsOptional } from "class-validator";
import { Types } from "mongoose";

export class MinerPerformanceRequestDto {
  @IsOptional()
  @IsObject()
  public minerId?: Types.ObjectId;

  @IsOptional()
  @IsObject()
  public timeRange?: TimeRange;
}

export class MinerPerformanceResponseDto {
  @IsOptional()
  @IsObject()
  public miner?: Miner;

  @IsOptional()
  @IsObject()
  public timeRange?: TimeRange;

  @IsOptional()
  @IsNumber()
  public profits?: Revenue;

  @IsOptional()
  @IsNumber()
  public averageHashRate?: HashRate;

  @IsOptional()
  @IsArray()
  public contributionRatios?: Array<CalculatedWorkerContribution>;
}

export type CalculatedWorkerContribution = {
  poolUsername?: string;
  workerName?: string;
  hashRate?: HashRate;
  profit?: Revenue;
  timeRange?: TimeRange;
};

export type FlattenedWorkerContribution = {
  poolUsername?: string;
  workerName?: string;
  hashRate?: HashRate;
  timeRange?: TimeRange;
};
