"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateContractRequestDto = exports.CreateContractRequestDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const mongoose_1 = require("mongoose");
class CreateContractRequestDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], CreateContractRequestDto.prototype, "customer", void 0);
tslib_1.__decorate([
    (0, class_validator_1.ValidateIf)((o) => !!!o.resaleContract),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], CreateContractRequestDto.prototype, "hostingContract", void 0);
tslib_1.__decorate([
    (0, class_validator_1.ValidateIf)((o) => !!!o.hostingContract),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], CreateContractRequestDto.prototype, "resaleContract", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], CreateContractRequestDto.prototype, "poolActivity", void 0);
exports.CreateContractRequestDto = CreateContractRequestDto;
class UpdateContractRequestDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", mongoose_1.Types.ObjectId)
], UpdateContractRequestDto.prototype, "contractId", void 0);
tslib_1.__decorate([
    (0, class_validator_1.ValidateIf)((o) => !!!o.resaleContract),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], UpdateContractRequestDto.prototype, "hostingContract", void 0);
tslib_1.__decorate([
    (0, class_validator_1.ValidateIf)((o) => !!!o.hostingContract),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], UpdateContractRequestDto.prototype, "resaleContract", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], UpdateContractRequestDto.prototype, "poolActivity", void 0);
exports.UpdateContractRequestDto = UpdateContractRequestDto;
//# sourceMappingURL=contract.dto.js.map