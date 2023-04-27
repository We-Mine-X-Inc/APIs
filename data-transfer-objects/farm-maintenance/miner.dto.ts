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

export class MutableMinerFields {
  @IsOptional()
  @IsObject()
  public owner?: Customer;

  @IsOptional()
  @IsObject()
  public inventoryItem?: InventoryItem;

  @IsOptional()
  @IsMACAddress()
  public macAddress?: string;

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

export class CreateMinerDto {
  @IsOptional()
  @IsObject()
  public initialFields?: MutableMinerFields;
}

export class UpdateMinerDto {
  @IsOptional()
  @IsObject()
  public minerId?: Types.ObjectId;

  @IsOptional()
  @IsObject()
  public mutatedFields?: MutableMinerFields;
}
