import { Customer } from "../../business-logic-interfaces/farm-maintenance/customer.interface";
import { PoolPurposeType, PoolType } from "../../business-logic-interfaces/farm-maintenance/pool.interface";
export declare class CreatePoolRequestDto {
    creator?: Customer;
    protocol?: string;
    domain?: string;
    username?: string;
    poolType?: PoolType;
    purpose?: PoolPurposeType;
}
export interface CreatePoolRequest {
    creator: Customer;
    protocol: string;
    domain: string;
    username: string;
    poolType: PoolType;
    purpose: PoolPurposeType;
}
//# sourceMappingURL=pool.dto.d.ts.map