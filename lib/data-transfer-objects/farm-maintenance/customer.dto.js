"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCustomerRequestDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class CreateCustomerRequestDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsEmail)(),
    tslib_1.__metadata("design:type", String)
], CreateCustomerRequestDto.prototype, "email", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateCustomerRequestDto.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateCustomerRequestDto.prototype, "lastName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsPhoneNumber)(),
    tslib_1.__metadata("design:type", String)
], CreateCustomerRequestDto.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateCustomerRequestDto.prototype, "address", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsBoolean)(),
    tslib_1.__metadata("design:type", Boolean)
], CreateCustomerRequestDto.prototype, "isCompanyCustomer", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsBoolean)(),
    tslib_1.__metadata("design:type", Boolean)
], CreateCustomerRequestDto.prototype, "hasSubmittedSignUpInfo", void 0);
exports.CreateCustomerRequestDto = CreateCustomerRequestDto;
//# sourceMappingURL=customer.dto.js.map