import { InventoryItemStatus } from "@/business-logic-interfaces/farm-maintenance/inventory-item";
import { MinerOperationsMetadata } from "@/interfaces";
import { IsEnum, IsObject, IsOptional, IsString } from "class-validator";
import { Types } from "mongoose";

export class CreateMinerRequestDto {
  @IsEnum(InventoryItemStatus)
  public status?: InventoryItemStatus;

  @IsString()
  public model?: string;

  @IsObject()
  public details?: Types.ObjectId;

  @IsOptional()
  @IsObject()
  public metadata?: MinerOperationsMetadata;
}

export interface CreateMinerReqeust {
  status: InventoryItemStatus;
  model: string;
  details: Types.ObjectId;
  metadata?: MinerOperationsMetadata;
}
