"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMinerRequestDto = exports.CreateMinerRequestDto = void 0;
const tslib_1 = require("tslib");
const miner_interface_1 = require("../../business-logic-interfaces/farm-maintenance/miner.interface");
const class_validator_1 = require("class-validator");
const mongoose_1 = require("mongoose");
class CreateMinerRequestDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], CreateMinerRequestDto.prototype, "owner", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], CreateMinerRequestDto.prototype, "inventoryItem", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsMACAddress)(),
    tslib_1.__metadata("design:type", String)
], CreateMinerRequestDto.prototype, "macAddress", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsIP)(),
    tslib_1.__metadata("design:type", String)
], CreateMinerRequestDto.prototype, "ipAddress", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsEnum)(miner_interface_1.MinerApiType),
    tslib_1.__metadata("design:type", Number)
], CreateMinerRequestDto.prototype, "API", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], CreateMinerRequestDto.prototype, "status", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], CreateMinerRequestDto.prototype, "rackLocation", void 0);
exports.CreateMinerRequestDto = CreateMinerRequestDto;
class UpdateMinerRequestDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", mongoose_1.Types.ObjectId)
], UpdateMinerRequestDto.prototype, "minerId", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIP)(),
    tslib_1.__metadata("design:type", String)
], UpdateMinerRequestDto.prototype, "ipAddress", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(miner_interface_1.MinerApiType),
    tslib_1.__metadata("design:type", Number)
], UpdateMinerRequestDto.prototype, "API", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], UpdateMinerRequestDto.prototype, "status", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], UpdateMinerRequestDto.prototype, "rackLocation", void 0);
exports.UpdateMinerRequestDto = UpdateMinerRequestDto;
//# sourceMappingURL=miner.dto.js.map