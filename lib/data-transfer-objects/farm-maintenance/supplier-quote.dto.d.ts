import { SupplierQuote } from "../../business-logic-interfaces/farm-maintenance/supplier-quote.interface";
export declare class CreateSupplierQuoteRequestDto {
    supplier?: SupplierQuote;
    itemModel?: string;
    unitPrice?: number;
    quantity?: number;
    sourceDateInMillis?: number;
    expirationDateInMillis?: number;
}
export interface CreateSupplierQuoteRequest {
    supplier: SupplierQuote;
    itemModel: string;
    unitPrice: number;
    quantity: number;
    sourceDateInMillis: number;
    expirationDateInMillis?: number;
}
//# sourceMappingURL=supplier-quote.dto.d.ts.map