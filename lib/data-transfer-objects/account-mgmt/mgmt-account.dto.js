"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMgmtAccountReqeustDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
/**
 * Mgmt Account DTO used for data validation of request objects.
 */
class CreateMgmtAccountReqeustDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsEmail)(),
    tslib_1.__metadata("design:type", String)
], CreateMgmtAccountReqeustDto.prototype, "email", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateMgmtAccountReqeustDto.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateMgmtAccountReqeustDto.prototype, "lastName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsPhoneNumber)(),
    tslib_1.__metadata("design:type", String)
], CreateMgmtAccountReqeustDto.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateMgmtAccountReqeustDto.prototype, "address", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], CreateMgmtAccountReqeustDto.prototype, "mgmtPermissions", void 0);
exports.CreateMgmtAccountReqeustDto = CreateMgmtAccountReqeustDto;
//# sourceMappingURL=mgmt-account.dto.js.map