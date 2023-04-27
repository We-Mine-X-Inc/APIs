import { HostingContract, PoolActivity, ResaleContract } from "../../business-logic-interfaces/farm-maintenance/contract.interface";
import { Customer } from "../../business-logic-interfaces/farm-maintenance/customer.interface";
import { Miner } from "../../business-logic-interfaces/farm-maintenance/miner.interface";
import { Types } from "mongoose";
export declare class MutableContractFields {
    customer?: Customer;
    hostingContract?: HostingContract;
    resaleContract?: ResaleContract;
    poolActivity?: PoolActivity;
}
export declare class CreateContractDto {
    miner?: Miner;
    initialFields?: MutableContractFields;
}
export declare class UpdateContractDto {
    contractId?: Types.ObjectId;
    mutatedFields?: MutableContractFields;
}
//# sourceMappingURL=contract.dto.d.ts.map