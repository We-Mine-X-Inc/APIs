"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateHostingContractRequestDto = exports.CreateHostingContractRequestDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const mongoose_1 = require("mongoose");
class CreateHostingContractRequestDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], CreateHostingContractRequestDto.prototype, "customer", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], CreateHostingContractRequestDto.prototype, "poolActivity", void 0);
exports.CreateHostingContractRequestDto = CreateHostingContractRequestDto;
class UpdateHostingContractRequestDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", mongoose_1.Types.ObjectId)
], UpdateHostingContractRequestDto.prototype, "contractId", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], UpdateHostingContractRequestDto.prototype, "poolActivity", void 0);
exports.UpdateHostingContractRequestDto = UpdateHostingContractRequestDto;
//# sourceMappingURL=contract.dto.js.map