import {
  WorkerHashRateContribution,
  WorkerMap,
} from "@/business-logic-interfaces/farm-metrics/mining-worker-hash-rate.interface";
import { TimeRange } from "@farm-metrics-interfaces/performance/time.interface";
import { IsArray, IsObject, IsOptional, IsString } from "class-validator";

export class AddPoolWorkerHashRateContributionRequestDto {
  @IsOptional()
  @IsString()
  public accountAddress?: string;

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

export interface AddPoolWorkerHashRateContributionRequest {
  accountAddress: string;
  timeRange: TimeRange;
  clientWorkers?: WorkerMap;
  companyWorkers?: WorkerMap;
}

export class ListPoolWorkerHashRateContributionRequestDto {
  @IsArray()
  public accountAddresses: string[] = [];

  @IsObject()
  public timeRange?: TimeRange;
}

export interface ListPoolWorkerHashRateContributionRequest {
  accountAddresses: string[];
  timeRange: TimeRange;
}

export class ListPoolWorkerHashRateContributionResponseDto {
  @IsArray()
  public workerContributions: WorkerHashRateContribution[] = [];
}

export interface ListPoolWorkerHashRateContributionResponse {
  workerContributions: WorkerHashRateContribution[];
}
