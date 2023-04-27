import {
  IsBoolean,
  IsEmail,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from "class-validator";

export class CreateCustomerDto {
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
  @IsBoolean()
  public isCompanyCustomer?: boolean;
}
