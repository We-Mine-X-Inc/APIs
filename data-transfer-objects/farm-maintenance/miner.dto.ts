import { Customer } from "@farm-maintenance-interfaces/customer.interface";
import { InventoryItem } from "@farm-maintenance-interfaces/inventory-item.interface";
import {
  MinerApiType,
  MinerStatus,
  RackLocation,
} from "@farm-maintenance-interfaces/miner.interface";
import {
  IsEnum,
  IsIP,
  IsMACAddress,
  IsObject,
  IsOptional,
} from "class-validator";
import { Types } from "mongoose";

export class CreateMinerRequestDto {
  @IsObject()
  public owner?: Customer;

  @IsObject()
  public inventoryItem?: InventoryItem;

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
  inventoryItem: InventoryItem;
  macAddress: string;
  ipAddress: string;
  API: MinerApiType;
  status: MinerStatus;
  rackLocation: RackLocation;
}

export class UpdateMinerRequestDto {
  @IsOptional()
  @IsObject()
  public minerId?: Types.ObjectId;

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

export interface UpdateMinerRequest {
  minerId: Types.ObjectId;
  ipAddress?: string;
  API?: MinerApiType;
  status?: MinerStatus;
  rackLocation?: RackLocation;
}
