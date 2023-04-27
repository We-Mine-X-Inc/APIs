"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateContractDto = exports.CreateContractDto = exports.MutableContractFields = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const mongoose_1 = require("mongoose");
class MutableContractFields {
}
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], MutableContractFields.prototype, "customer", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], MutableContractFields.prototype, "hostingContract", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], MutableContractFields.prototype, "resaleContract", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], MutableContractFields.prototype, "poolActivity", void 0);
exports.MutableContractFields = MutableContractFields;
class CreateContractDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], CreateContractDto.prototype, "miner", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", MutableContractFields)
], CreateContractDto.prototype, "initialFields", void 0);
exports.CreateContractDto = CreateContractDto;
class UpdateContractDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", mongoose_1.Types.ObjectId)
], UpdateContractDto.prototype, "contractId", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", MutableContractFields)
], UpdateContractDto.prototype, "mutatedFields", void 0);
exports.UpdateContractDto = UpdateContractDto;
//# sourceMappingURL=contract.dto.js.map