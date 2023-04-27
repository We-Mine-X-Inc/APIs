import { MgmtPermissions } from "@account-mgmt-interfaces/mgmt-account.interface";
import {
  IsEmail,
  IsObject,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from "class-validator";

export class CreateMgmtAccountDto {
  @IsOptional()
  @IsEmail()
  public email?: string;

  @IsOptional()
  @IsString()
  public firstName?: string;

  @IsOptional()
  @IsString()
  public lastName?: string;

  @IsOptional()
  @IsPhoneNumber()
  public phoneNumber?: string;

  @IsOptional()
  @IsString()
  public address?: string;

  @IsOptional()
  @IsObject()
  public mgmtPermissions?: MgmtPermissions;
}
