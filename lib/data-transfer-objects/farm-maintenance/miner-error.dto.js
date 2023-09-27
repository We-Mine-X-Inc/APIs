"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMinerErrorRequestDto = void 0;
const tslib_1 = require("tslib");
const interfaces_1 = require("../../interfaces");
const class_validator_1 = require("class-validator");
class CreateMinerErrorRequestDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsEnum)(interfaces_1.MinerErrorType),
    tslib_1.__metadata("design:type", Number)
], CreateMinerErrorRequestDto.prototype, "type", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], CreateMinerErrorRequestDto.prototype, "poolSwitchErrorInfo", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateMinerErrorRequestDto.prototype, "stackTrace", void 0);
exports.CreateMinerErrorRequestDto = CreateMinerErrorRequestDto;
//# sourceMappingURL=miner-error.dto.js.map