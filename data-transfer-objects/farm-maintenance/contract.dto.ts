import { PoolActivity } from "@/business-logic-interfaces/farm-maintenance/hosting-contract.interface";
import { Customer } from "@farm-maintenance-interfaces/customer.interface";
import { IsObject, IsOptional } from "class-validator";
import { Types } from "mongoose";

export class CreateHostingContractRequestDto {
  @IsObject()
  public customer?: Customer;

  @IsOptional()
  @IsObject()
  public poolActivity?: PoolActivity;
}

export interface CreateHostingContractRequest {
  customer: Customer;
  poolActivity?: PoolActivity;
}

export class UpdateHostingContractRequestDto {
  @IsOptional()
  @IsObject()
  public contractId?: Types.ObjectId;

  @IsOptional()
  @IsObject()
  public poolActivity?: PoolActivity;
}

export interface UpdateHostingContractRequest {
  contractId: Types.ObjectId;
  poolActivity?: PoolActivity;
}
