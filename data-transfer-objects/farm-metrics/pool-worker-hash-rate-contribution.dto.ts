import {
  PoolWorkerHashRateContribution,
  WorkerMap,
} from "@farm-metrics-interfaces/pool-worker-hash-rate-contribution.interface";
import { TimeRange } from "@farm-metrics-interfaces/performance/time.interface";
import { IsArray, IsObject, IsOptional, IsString } from "class-validator";

export class AddPoolWorkerHashRateContributionDto {
  @IsOptional()
  @IsString()
  public poolUsername?: string;

  @IsOptional()
  @IsObject()
  public timeRange?: TimeRange;

  @IsOptional()
  @IsObject()
  public clientWorkers?: WorkerMap;

  @IsOptional()
  @IsObject()
  public companyWorkers?: WorkerMap;
}

export class ListPoolWorkerHashRateContributionRequestDto {
  @IsOptional()
  @IsArray()
  public poolUsernames?: string[];

  @IsOptional()
  @IsObject()
  public timeRange?: TimeRange;
}

export class ListPoolWorkerHashRateContributionResponseDto {
  @IsOptional()
  @IsArray()
  public poolWorkerContributions?: PoolWorkerHashRateContribution[];
}
