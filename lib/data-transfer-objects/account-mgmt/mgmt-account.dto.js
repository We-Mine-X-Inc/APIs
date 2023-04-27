"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMgmtAccountDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class CreateMgmtAccountDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    tslib_1.__metadata("design:type", String)
], CreateMgmtAccountDto.prototype, "email", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateMgmtAccountDto.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateMgmtAccountDto.prototype, "lastName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsPhoneNumber)(),
    tslib_1.__metadata("design:type", String)
], CreateMgmtAccountDto.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateMgmtAccountDto.prototype, "address", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], CreateMgmtAccountDto.prototype, "mgmtPermissions", void 0);
exports.CreateMgmtAccountDto = CreateMgmtAccountDto;
//# sourceMappingURL=mgmt-account.dto.js.map