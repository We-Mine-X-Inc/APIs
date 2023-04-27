import { SupplierQuote } from "@farm-maintenance-interfaces/supplier-quote.interface";
import { IsNumber, IsObject, IsOptional, IsString } from "class-validator";

export class CreateSupplierQuoteDto {
  @IsOptional()
  @IsObject()
  public supplier?: SupplierQuote;

  @IsOptional()
  @IsString()
  public itemModel?: string;

  @IsOptional()
  @IsNumber()
  public unitPrice?: number;

  @IsOptional()
  @IsNumber()
  public quantity?: number;

  @IsOptional()
  @IsNumber()
  public sourceDateInMillis?: number;

  @IsOptional()
  @IsNumber()
  public expirationDateInMillis?: number;
}
