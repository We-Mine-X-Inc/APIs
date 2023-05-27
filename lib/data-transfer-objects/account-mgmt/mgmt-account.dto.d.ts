import { MgmtPermissions } from "../../business-logic-interfaces/account-mgmt/mgmt-account.interface";
/**
 * Mgmt Account DTO used for data validation of request objects.
 */
export declare class CreateMgmtAccountReqeustDto {
    email?: string;
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    address?: string;
    mgmtPermissions?: MgmtPermissions;
}
export interface CreateMgmtAccountRequest {
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber?: string;
    address?: string;
    mgmtPermissions: MgmtPermissions;
}
//# sourceMappingURL=mgmt-account.dto.d.ts.map