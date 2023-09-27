import { MinerErrorType, PoolSwitchErrorInfo } from "@/interfaces";
import { IsEnum, IsObject, IsOptional, IsString } from "class-validator";

export class CreateMinerErrorRequestDto {
  @IsEnum(MinerErrorType)
  public type?: MinerErrorType;

  @IsOptional()
  @IsObject()
  public poolSwitchErrorInfo?: PoolSwitchErrorInfo;

  @IsOptional()
  @IsString()
  public stackTrace?: string;
}

export interface CreateMinerErrorRequest {
  type: MinerErrorType;
  poolSwitchErrorInfo?: PoolSwitchErrorInfo;
  stackTrace?: string;
}
