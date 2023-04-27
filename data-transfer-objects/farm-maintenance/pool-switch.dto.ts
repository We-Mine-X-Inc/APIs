import { IsNumber, IsOptional, IsObject } from "class-validator";
import { Types } from "mongoose";

export class StartPoolSwitchDto {
  @IsOptional()
  @IsObject()
  public contractId?: Types.ObjectId;

  @IsOptional()
  @IsNumber()
  public startingPoolIndex?: string;
}
