import {
  HostingContract,
  PoolActivity,
  ResaleContract,
} from "@farm-maintenance-interfaces/contract.interface";
import { Customer } from "@farm-maintenance-interfaces/customer.interface";
import { Miner } from "@farm-maintenance-interfaces/miner.interface";
import { IsObject, IsOptional, ValidateIf } from "class-validator";
import { Types } from "mongoose";

export class CreateContractRequestDto {
  @IsObject()
  public miner?: Miner;

  @IsObject()
  public customer?: Customer;

  @ValidateIf((o) => !!!o.resaleContract)
  @IsObject()
  public hostingContract?: HostingContract;

  @ValidateIf((o) => !!!o.hostingContract)
  @IsObject()
  public resaleContract?: ResaleContract;

  @IsOptional()
  @IsObject()
  public poolActivity?: PoolActivity;
}

export interface CreateContractRequest {
  miner: Miner;
  customer: Customer;
  hostingContract?: HostingContract;
  resaleContract?: ResaleContract;
  poolActivity?: PoolActivity;
}

export class UpdateContractRequestDto {
  @IsOptional()
  @IsObject()
  public contractId?: Types.ObjectId;

  @ValidateIf((o) => !!!o.resaleContract)
  @IsObject()
  public hostingContract?: HostingContract;

  @ValidateIf((o) => !!!o.hostingContract)
  @IsObject()
  public resaleContract?: ResaleContract;

  @IsOptional()
  @IsObject()
  public poolActivity?: PoolActivity;
}

export interface UpdateContractRequest {
  contractId: Types.ObjectId;
  hostingContract?: HostingContract;
  resaleContract?: ResaleContract;
  poolActivity?: PoolActivity;
}
