import {
  HostingContract,
  PoolActivity,
  ResaleContract,
} from "@farm-maintenance-interfaces/contract.interface";
import { Customer } from "@farm-maintenance-interfaces/customer.interface";
import { Miner } from "@farm-maintenance-interfaces/miner.interface";
import { IsObject, IsOptional } from "class-validator";
import { Types } from "mongoose";

export class MutableContractFields {
  @IsOptional()
  @IsObject()
  public customer?: Customer;

  @IsOptional()
  @IsObject()
  public hostingContract?: HostingContract;

  @IsOptional()
  @IsObject()
  public resaleContract?: ResaleContract;

  @IsOptional()
  @IsObject()
  public poolActivity?: PoolActivity;
}

export class CreateContractDto {
  @IsOptional()
  @IsObject()
  public miner?: Miner;

  @IsOptional()
  @IsObject()
  public initialFields?: MutableContractFields;
}

export class UpdateContractDto {
  @IsOptional()
  @IsObject()
  public contractId?: Types.ObjectId;

  @IsOptional()
  @IsObject()
  public mutatedFields?: MutableContractFields;
}
