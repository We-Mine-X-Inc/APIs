import { Types } from "mongoose";
type Supplier = {
    email: string;
    name: string;
    phone?: string;
};
type Company = {
    name: string;
    phone?: string;
};
export interface SupplierQuote {
    _id: Types.ObjectId;
    supplier: Supplier;
    company: Company;
    itemModel: string;
    unitPrice: number;
    quantity: number;
    sourceDateInMillis: number;
    expirationDateInMillis: number;
}
export declare const SUPPLIER_QUOTE_FIELDS_TO_POPULATE: {
    path: string;
}[];
export {};
//# sourceMappingURL=supplier-quote.interface.d.ts.map