import {
  InventoryItemStatus,
  InventoryItemType,
  OperationalMetadata,
} from "@farm-maintenance-interfaces/inventory-item.interface";
import {
  IsArray,
  IsEnum,
  IsObject,
  IsOptional,
  IsString,
} from "class-validator";
import { Types } from "mongoose";

export class CreateInventoryItemRequestDto {
  @IsEnum(InventoryItemType)
  public type?: InventoryItemType;

  @IsEnum(InventoryItemStatus)
  public status?: InventoryItemStatus;

  @IsString()
  public model?: string;

  @IsArray()
  public operationalDependencies: Types.ObjectId[] = [];

  @IsOptional()
  @IsObject()
  public operationalMetadata?: OperationalMetadata;
}

export interface CreateInventoryItemReqeust {
  type: InventoryItemType;
  status: InventoryItemStatus;
  model: string;
  operationalDependencies: Types.ObjectId[];
  operationalMetadata?: OperationalMetadata;
}
