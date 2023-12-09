import { Customer } from "@farm-maintenance-interfaces/customer.interface";
import { Miner } from "@/business-logic-interfaces/farm-maintenance/miner.interface";
import {
  MinerApiType,
  MinerStatus,
  RackLocation,
} from "@/business-logic-interfaces/farm-maintenance/hosted-miner.interface";
import {
  IsEnum,
  IsIP,
  IsMACAddress,
  IsObject,
  IsOptional,
} from "class-validator";
import { Types } from "mongoose";

export class CreateHostedMinerRequestDto {
  @IsObject()
  public owner?: Customer;

  @IsObject()
  public miner?: Miner;

  @IsMACAddress()
  public macAddress?: string;

  @IsIP()
  public ipAddress?: string;

  @IsEnum(MinerApiType)
  public API?: MinerApiType;

  @IsObject()
  public status?: MinerStatus;

  @IsObject()
  public rackLocation?: RackLocation;
}

export interface CreateMinerRequest {
  owner: Customer;
  miner: Miner;
  macAddress: string;
  ipAddress: string;
  API: MinerApiType;
  status: MinerStatus;
  rackLocation: RackLocation;
}

export class UpdateHostedMinerRequestDto {
  @IsObject()
  public hostedMinerId?: Types.ObjectId;

  @IsOptional()
  @IsIP()
  public ipAddress?: string;

  @IsOptional()
  @IsEnum(MinerApiType)
  public API?: MinerApiType;

  @IsOptional()
  @IsObject()
  public status?: MinerStatus;

  @IsOptional()
  @IsObject()
  public rackLocation?: RackLocation;
}

export interface UpdateHostedMinerRequest {
  hostedMinerId: Types.ObjectId;
  ipAddress?: string;
  API?: MinerApiType;
  status?: MinerStatus;
  rackLocation?: RackLocation;
}
