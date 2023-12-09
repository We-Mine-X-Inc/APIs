import { HostingContract, PoolActivity, ResaleContract } from "../../business-logic-interfaces/farm-maintenance/contract.interface";
import { Customer } from "../../business-logic-interfaces/farm-maintenance/customer.interface";
import { Types } from "mongoose";
export declare class CreateContractRequestDto {
    customer?: Customer;
    hostingContract?: HostingContract;
    resaleContract?: ResaleContract;
    poolActivity?: PoolActivity;
}
export interface CreateContractRequest {
    customer: Customer;
    hostingContract?: HostingContract;
    resaleContract?: ResaleContract;
    poolActivity?: PoolActivity;
}
export declare class UpdateContractRequestDto {
    contractId?: Types.ObjectId;
    hostingContract?: HostingContract;
    resaleContract?: ResaleContract;
    poolActivity?: PoolActivity;
}
export interface UpdateContractRequest {
    contractId: Types.ObjectId;
    hostingContract?: HostingContract;
    resaleContract?: ResaleContract;
    poolActivity?: PoolActivity;
}
//# sourceMappingURL=contract.dto.d.ts.map