import { MgmtPermissions } from "@/business-logic-interfaces/operations-dashboard/mgmt-account.interface";
import {
  IsEmail,
  IsObject,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from "class-validator";

/**
 * Mgmt Account DTO used for data validation of request objects.
 */
export class CreateMgmtAccountReqeustDto {
  @IsEmail()
  public email?: string;

  @IsString()
  public firstName?: string;

  @IsString()
  public lastName?: string;

  @IsOptional()
  @IsPhoneNumber()
  public phoneNumber?: string;

  @IsOptional()
  @IsString()
  public address?: string;

  @IsObject()
  public mgmtPermissions?: MgmtPermissions;
}

export interface CreateMgmtAccountRequest {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  address?: string;
  mgmtPermissions: MgmtPermissions;
}
