import { InventoryItemStatus } from "@/business-logic-interfaces/farm-maintenance/inventory-item";
import { ManagementMetadata } from "@/business-logic-interfaces/farm-maintenance/power-controller.interface";
import { IsEnum, IsObject, IsOptional, IsString } from "class-validator";

export class CreatePowerControllerRequestDto {
  @IsEnum(InventoryItemStatus)
  public status?: InventoryItemStatus;

  @IsString()
  public model?: string;

  @IsOptional()
  @IsObject()
  public metadata?: ManagementMetadata;
}

export interface CreatePowerControllerReqeust {
  status: InventoryItemStatus;
  model: string;
  metadata?: ManagementMetadata;
}
