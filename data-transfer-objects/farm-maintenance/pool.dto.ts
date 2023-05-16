import { Customer } from "@farm-maintenance-interfaces/customer.interface";
import {
  PoolPurposeType,
  PoolType,
} from "@farm-maintenance-interfaces/pool.interface";
import { IsEnum, IsObject, IsOptional, IsString } from "class-validator";
import { Types } from "mongoose";

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

export class GetPoolRequestDto {
  @IsObject()
  public id?: Types.ObjectId;
}

export interface GetPoolRequest {
  id: Types.ObjectId;
}

export class ListPoolRequestDto {
  @IsObject()
  public creator?: Customer;

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

export interface ListPoolRequest {
  creator?: Customer;
  username?: string;
  poolType?: PoolType;
  purpose?: PoolPurposeType;
}
