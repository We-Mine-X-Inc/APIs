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

export class CreateInventoryItemDto {
  @IsOptional()
  @IsEnum(InventoryItemType)
  public type?: InventoryItemType;

  @IsOptional()
  @IsEnum(InventoryItemStatus)
  public status?: InventoryItemStatus;

  @IsOptional()
  @IsString()
  public model?: string;

  @IsOptional()
  @IsArray()
  public operationalDependencies?: Types.ObjectId[];

  @IsOptional()
  @IsObject()
  public operationalMetadata?: OperationalMetadata;
}
