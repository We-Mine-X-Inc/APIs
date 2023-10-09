"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPoolWorkerHashRateContributionResponseDto = exports.ListPoolWorkerHashRateContributionRequestDto = exports.AddPoolWorkerHashRateContributionRequestDto = void 0;
const tslib_1 = require("tslib");
const mining_worker_hash_rate_interface_1 = require("../../business-logic-interfaces/farm-metrics/mining-worker-hash-rate.interface");
const time_interface_1 = require("../../business-logic-interfaces/farm-metrics/performance/time.interface");
const class_validator_1 = require("class-validator");
class AddPoolWorkerHashRateContributionRequestDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], AddPoolWorkerHashRateContributionRequestDto.prototype, "accountAddress", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", typeof (_a = typeof time_interface_1.TimeRange !== "undefined" && time_interface_1.TimeRange) === "function" ? _a : Object)
], AddPoolWorkerHashRateContributionRequestDto.prototype, "timeRange", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", typeof (_b = typeof mining_worker_hash_rate_interface_1.WorkerMap !== "undefined" && mining_worker_hash_rate_interface_1.WorkerMap) === "function" ? _b : Object)
], AddPoolWorkerHashRateContributionRequestDto.prototype, "clientWorkers", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", typeof (_c = typeof mining_worker_hash_rate_interface_1.WorkerMap !== "undefined" && mining_worker_hash_rate_interface_1.WorkerMap) === "function" ? _c : Object)
], AddPoolWorkerHashRateContributionRequestDto.prototype, "companyWorkers", void 0);
exports.AddPoolWorkerHashRateContributionRequestDto = AddPoolWorkerHashRateContributionRequestDto;
class ListPoolWorkerHashRateContributionRequestDto {
    constructor() {
        this.accountAddresses = [];
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsArray)(),
    tslib_1.__metadata("design:type", Array)
], ListPoolWorkerHashRateContributionRequestDto.prototype, "accountAddresses", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", typeof (_d = typeof time_interface_1.TimeRange !== "undefined" && time_interface_1.TimeRange) === "function" ? _d : Object)
], ListPoolWorkerHashRateContributionRequestDto.prototype, "timeRange", void 0);
exports.ListPoolWorkerHashRateContributionRequestDto = ListPoolWorkerHashRateContributionRequestDto;
class ListPoolWorkerHashRateContributionResponseDto {
    constructor() {
        this.workerContributions = [];
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsArray)(),
    tslib_1.__metadata("design:type", Array)
], ListPoolWorkerHashRateContributionResponseDto.prototype, "workerContributions", void 0);
exports.ListPoolWorkerHashRateContributionResponseDto = ListPoolWorkerHashRateContributionResponseDto;
//# sourceMappingURL=mining-worker-hash-rate.dto.js.map