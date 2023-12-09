import { InventoryItemStatus } from "@/business-logic-interfaces/farm-maintenance/inventory-item";
import { MinerOperationsMetadata } from "@/interfaces";
import { IsEnum, IsObject, IsOptional, IsString } from "class-validator";

export class CreateMinerRequestDto {
  @IsEnum(InventoryItemStatus)
  public status?: InventoryItemStatus;

  @IsString()
  public model?: string;

  @IsOptional()
  @IsObject()
  public metadata?: MinerOperationsMetadata;
}

export interface CreateMinerReqeust {
  status: InventoryItemStatus;
  model: string;
  metadata?: MinerOperationsMetadata;
}
