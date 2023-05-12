"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinerPerformanceResponseDto = exports.MinerPerformanceRequestDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const mongoose_1 = require("mongoose");
class MinerPerformanceRequestDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", mongoose_1.Types.ObjectId)
], MinerPerformanceRequestDto.prototype, "minerId", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], MinerPerformanceRequestDto.prototype, "timeRange", void 0);
exports.MinerPerformanceRequestDto = MinerPerformanceRequestDto;
class MinerPerformanceResponseDto {
    constructor() {
        this.contributionRatios = [];
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], MinerPerformanceResponseDto.prototype, "miner", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], MinerPerformanceResponseDto.prototype, "timeRange", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Object)
], MinerPerformanceResponseDto.prototype, "profits", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Object)
], MinerPerformanceResponseDto.prototype, "averageHashRate", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsArray)(),
    tslib_1.__metadata("design:type", Array)
], MinerPerformanceResponseDto.prototype, "contributionRatios", void 0);
exports.MinerPerformanceResponseDto = MinerPerformanceResponseDto;
//# sourceMappingURL=miner-performance.dto.js.map