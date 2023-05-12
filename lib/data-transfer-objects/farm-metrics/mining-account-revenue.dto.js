"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListMinerAccountRevenueResponseDto = exports.ListMiningAccountRevenueRequestDto = exports.AddMiningAccountRevenueRequestDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class AddMiningAccountRevenueRequestDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", String)
], AddMiningAccountRevenueRequestDto.prototype, "poolUsername", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], AddMiningAccountRevenueRequestDto.prototype, "timeRange", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], AddMiningAccountRevenueRequestDto.prototype, "cummulativeProfits", void 0);
exports.AddMiningAccountRevenueRequestDto = AddMiningAccountRevenueRequestDto;
class ListMiningAccountRevenueRequestDto {
    constructor() {
        this.accountUsernames = [];
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsArray)(),
    tslib_1.__metadata("design:type", Array)
], ListMiningAccountRevenueRequestDto.prototype, "accountUsernames", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], ListMiningAccountRevenueRequestDto.prototype, "timeRange", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], ListMiningAccountRevenueRequestDto.prototype, "timeSingleton", void 0);
exports.ListMiningAccountRevenueRequestDto = ListMiningAccountRevenueRequestDto;
class ListMinerAccountRevenueResponseDto {
    constructor() {
        this.accountRevenues = [];
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsArray)(),
    tslib_1.__metadata("design:type", Array)
], ListMinerAccountRevenueResponseDto.prototype, "accountRevenues", void 0);
exports.ListMinerAccountRevenueResponseDto = ListMinerAccountRevenueResponseDto;
//# sourceMappingURL=mining-account-revenue.dto.js.map