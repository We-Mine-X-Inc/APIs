"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListMiningAccountRevenueResponseDto = exports.ListMiningAccountRevenueRequestDto = exports.AddMiningAccountRevenueRequestDto = void 0;
const tslib_1 = require("tslib");
const revenue_interface_1 = require("../../business-logic-interfaces/farm-metrics/performance/revenue.interface");
const time_interface_1 = require("../../business-logic-interfaces/farm-metrics/performance/time.interface");
const class_validator_1 = require("class-validator");
class AddMiningAccountRevenueRequestDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", String)
], AddMiningAccountRevenueRequestDto.prototype, "accountAddress", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", typeof (_a = typeof time_interface_1.TimeRange !== "undefined" && time_interface_1.TimeRange) === "function" ? _a : Object)
], AddMiningAccountRevenueRequestDto.prototype, "timeRange", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", typeof (_b = typeof revenue_interface_1.EconomicValue !== "undefined" && revenue_interface_1.EconomicValue) === "function" ? _b : Object)
], AddMiningAccountRevenueRequestDto.prototype, "cummulativeProfits", void 0);
exports.AddMiningAccountRevenueRequestDto = AddMiningAccountRevenueRequestDto;
class ListMiningAccountRevenueRequestDto {
    constructor() {
        this.accountAddresses = [];
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsArray)(),
    tslib_1.__metadata("design:type", Array)
], ListMiningAccountRevenueRequestDto.prototype, "accountAddresses", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", typeof (_c = typeof time_interface_1.TimeRange !== "undefined" && time_interface_1.TimeRange) === "function" ? _c : Object)
], ListMiningAccountRevenueRequestDto.prototype, "timeRange", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", typeof (_d = typeof time_interface_1.TimeSingleton !== "undefined" && time_interface_1.TimeSingleton) === "function" ? _d : Object)
], ListMiningAccountRevenueRequestDto.prototype, "timeSingleton", void 0);
exports.ListMiningAccountRevenueRequestDto = ListMiningAccountRevenueRequestDto;
class ListMiningAccountRevenueResponseDto {
    constructor() {
        this.accountRevenues = [];
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsArray)(),
    tslib_1.__metadata("design:type", Array)
], ListMiningAccountRevenueResponseDto.prototype, "accountRevenues", void 0);
exports.ListMiningAccountRevenueResponseDto = ListMiningAccountRevenueResponseDto;
//# sourceMappingURL=mining-account-revenue.dto.js.map