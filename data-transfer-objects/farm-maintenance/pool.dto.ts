import { Customer } from "@farm-maintenance-interfaces/customer.interface";
import {
  PoolPurposeType,
  PoolType,
} from "@farm-maintenance-interfaces/pool.interface";
import { IsEnum, IsObject, IsOptional, IsString } from "class-validator";

export class CreatePoolRequestDto {
  @IsObject()
  public creator?: Customer;

  @IsString()
  public protocol?: string;

  @IsString()
  public domain?: string;

  @IsString()
  public username?: string;

  @IsEnum(PoolType)
  public poolType?: PoolType;

  @IsEnum(PoolPurposeType)
  public purpose?: PoolPurposeType;
}

export interface CreatePoolRequest {
  creator: Customer;
  protocol: string;
  domain: string;
  username: string;
  poolType: PoolType;
  purpose: PoolPurposeType;
}
