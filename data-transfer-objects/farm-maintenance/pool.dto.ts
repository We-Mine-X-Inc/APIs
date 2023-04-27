import { Customer } from "@farm-maintenance-interfaces/customer.interface";
import {
  PoolPurposeType,
  PoolType,
} from "@farm-maintenance-interfaces/pool.interface";
import { IsEnum, IsObject, IsOptional, IsString } from "class-validator";

export class CreatePoolDto {
  @IsOptional()
  @IsObject()
  public creator?: Customer;

  @IsOptional()
  @IsString()
  public protocol?: string;

  @IsOptional()
  @IsString()
  public domain?: string;

  @IsOptional()
  @IsString()
  public username?: string;

  @IsOptional()
  @IsEnum(PoolType)
  public poolType?: PoolType;

  @IsOptional()
  @IsEnum(PoolPurposeType)
  public purpose?: PoolPurposeType;
}
