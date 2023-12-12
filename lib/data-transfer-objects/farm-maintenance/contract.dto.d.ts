import { PoolActivity } from "../../business-logic-interfaces/farm-maintenance/hosting-contract.interface";
import { Customer } from "../../business-logic-interfaces/farm-maintenance/customer.interface";
import { Types } from "mongoose";
export declare class CreateHostingContractRequestDto {
    customer?: Customer;
    poolActivity?: PoolActivity;
}
export interface CreateHostingContractRequest {
    customer: Customer;
    poolActivity?: PoolActivity;
}
export declare class UpdateHostingContractRequestDto {
    contractId?: Types.ObjectId;
    poolActivity?: PoolActivity;
}
export interface UpdateHostingContractRequest {
    contractId: Types.ObjectId;
    poolActivity?: PoolActivity;
}
//# sourceMappingURL=contract.dto.d.ts.map