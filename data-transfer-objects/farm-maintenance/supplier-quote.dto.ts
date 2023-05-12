import { SupplierQuote } from "@farm-maintenance-interfaces/supplier-quote.interface";
import { IsNumber, IsObject, IsOptional, IsString } from "class-validator";

export class CreateSupplierQuoteRequestDto {
  @IsObject()
  public supplier?: SupplierQuote;

  @IsString()
  public itemModel?: string;

  @IsNumber()
  public unitPrice?: number;

  @IsNumber()
  public quantity?: number;

  @IsNumber()
  public sourceDateInMillis?: number;

  @IsOptional()
  @IsNumber()
  public expirationDateInMillis?: number;
}

export interface CreateSupplierQuoteRequest {
  supplier: SupplierQuote;
  itemModel: string;
  unitPrice: number;
  quantity: number;
  sourceDateInMillis: number;
  expirationDateInMillis?: number;
}
