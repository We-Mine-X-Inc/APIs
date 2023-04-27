"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPoolRevenueResponseDto = exports.ListPoolRevenueRequestDto = exports.AddPoolRevenueDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class AddPoolRevenueDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", String)
], AddPoolRevenueDto.prototype, "poolUsername", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], AddPoolRevenueDto.prototype, "timeRange", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], AddPoolRevenueDto.prototype, "cummulativeProfits", void 0);
exports.AddPoolRevenueDto = AddPoolRevenueDto;
class ListPoolRevenueRequestDto {
    constructor() {
        this.poolUsernames = [];
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsArray)(),
    tslib_1.__metadata("design:type", Array)
], ListPoolRevenueRequestDto.prototype, "poolUsernames", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], ListPoolRevenueRequestDto.prototype, "timeRange", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], ListPoolRevenueRequestDto.prototype, "timeSingleton", void 0);
exports.ListPoolRevenueRequestDto = ListPoolRevenueRequestDto;
class ListPoolRevenueResponseDto {
    constructor() {
        this.poolRevenues = [];
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsArray)(),
    tslib_1.__metadata("design:type", Array)
], ListPoolRevenueResponseDto.prototype, "poolRevenues", void 0);
exports.ListPoolRevenueResponseDto = ListPoolRevenueResponseDto;
//# sourceMappingURL=pool-revenue.dto.js.map