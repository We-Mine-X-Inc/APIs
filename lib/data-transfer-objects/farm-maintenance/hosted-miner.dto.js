"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateHostedMinerRequestDto = exports.CreateHostedMinerRequestDto = void 0;
const tslib_1 = require("tslib");
const hosted_miner_interface_1 = require("../../business-logic-interfaces/farm-maintenance/hosted-miner.interface");
const class_validator_1 = require("class-validator");
const mongoose_1 = require("mongoose");
class CreateHostedMinerRequestDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], CreateHostedMinerRequestDto.prototype, "owner", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], CreateHostedMinerRequestDto.prototype, "miner", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsMACAddress)(),
    tslib_1.__metadata("design:type", String)
], CreateHostedMinerRequestDto.prototype, "macAddress", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsIP)(),
    tslib_1.__metadata("design:type", String)
], CreateHostedMinerRequestDto.prototype, "ipAddress", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsEnum)(hosted_miner_interface_1.MinerApiType),
    tslib_1.__metadata("design:type", Number)
], CreateHostedMinerRequestDto.prototype, "API", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], CreateHostedMinerRequestDto.prototype, "status", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], CreateHostedMinerRequestDto.prototype, "rackLocation", void 0);
exports.CreateHostedMinerRequestDto = CreateHostedMinerRequestDto;
class UpdateHostedMinerRequestDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", mongoose_1.Types.ObjectId)
], UpdateHostedMinerRequestDto.prototype, "hostedMinerId", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIP)(),
    tslib_1.__metadata("design:type", String)
], UpdateHostedMinerRequestDto.prototype, "ipAddress", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(hosted_miner_interface_1.MinerApiType),
    tslib_1.__metadata("design:type", Number)
], UpdateHostedMinerRequestDto.prototype, "API", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], UpdateHostedMinerRequestDto.prototype, "status", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], UpdateHostedMinerRequestDto.prototype, "rackLocation", void 0);
exports.UpdateHostedMinerRequestDto = UpdateHostedMinerRequestDto;
//# sourceMappingURL=hosted-miner.dto.js.map