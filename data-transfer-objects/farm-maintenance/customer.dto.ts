import {
  IsBoolean,
  IsEmail,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from "class-validator";

export class CreateCustomerRequestDto {
  @IsEmail()
  public email?: string;

  @IsString()
  public firstName?: string;

  @IsString()
  public lastName?: string;

  @IsPhoneNumber()
  public phoneNumber?: string;

  @IsString()
  public address?: string;

  @IsBoolean()
  public isCompanyCustomer?: boolean;
}

export interface CreateCustomerRequest {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  isCompanyCustomer: boolean;
}
