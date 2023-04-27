"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMinerDto = exports.CreateMinerDto = exports.MutableMinerFields = void 0;
const tslib_1 = require("tslib");
const miner_interface_1 = require("../../business-logic-interfaces/farm-maintenance/miner.interface");
const class_validator_1 = require("class-validator");
const mongoose_1 = require("mongoose");
class MutableMinerFields {
}
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], MutableMinerFields.prototype, "owner", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], MutableMinerFields.prototype, "inventoryItem", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsMACAddress)(),
    tslib_1.__metadata("design:type", String)
], MutableMinerFields.prototype, "macAddress", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIP)(),
    tslib_1.__metadata("design:type", String)
], MutableMinerFields.prototype, "ipAddress", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(miner_interface_1.MinerApiType),
    tslib_1.__metadata("design:type", Number)
], MutableMinerFields.prototype, "API", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], MutableMinerFields.prototype, "status", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], MutableMinerFields.prototype, "rackLocation", void 0);
exports.MutableMinerFields = MutableMinerFields;
class CreateMinerDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", MutableMinerFields)
], CreateMinerDto.prototype, "initialFields", void 0);
exports.CreateMinerDto = CreateMinerDto;
class UpdateMinerDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", mongoose_1.Types.ObjectId)
], UpdateMinerDto.prototype, "minerId", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", MutableMinerFields)
], UpdateMinerDto.prototype, "mutatedFields", void 0);
exports.UpdateMinerDto = UpdateMinerDto;
//# sourceMappingURL=miner.dto.js.map