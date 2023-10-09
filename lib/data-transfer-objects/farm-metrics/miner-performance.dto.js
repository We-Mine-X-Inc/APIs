"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinerPerformanceResponseDto = exports.MinerPerformanceRequestDto = void 0;
const tslib_1 = require("tslib");
const hash_rate_interface_1 = require("../../business-logic-interfaces/farm-metrics/performance/hash-rate.interface");
const revenue_interface_1 = require("../../business-logic-interfaces/farm-metrics/performance/revenue.interface");
const time_interface_1 = require("../../business-logic-interfaces/farm-metrics/performance/time.interface");
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
    tslib_1.__metadata("design:type", typeof (_a = typeof time_interface_1.TimeRange !== "undefined" && time_interface_1.TimeRange) === "function" ? _a : Object)
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
    tslib_1.__metadata("design:type", typeof (_b = typeof time_interface_1.TimeRange !== "undefined" && time_interface_1.TimeRange) === "function" ? _b : Object)
], MinerPerformanceResponseDto.prototype, "timeRange", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", typeof (_c = typeof revenue_interface_1.EconomicValue !== "undefined" && revenue_interface_1.EconomicValue) === "function" ? _c : Object)
], MinerPerformanceResponseDto.prototype, "profits", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", typeof (_d = typeof hash_rate_interface_1.HashRate !== "undefined" && hash_rate_interface_1.HashRate) === "function" ? _d : Object)
], MinerPerformanceResponseDto.prototype, "averageHashRate", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsArray)(),
    tslib_1.__metadata("design:type", Array)
], MinerPerformanceResponseDto.prototype, "contributionRatios", void 0);
exports.MinerPerformanceResponseDto = MinerPerformanceResponseDto;
//# sourceMappingURL=miner-performance.dto.js.map