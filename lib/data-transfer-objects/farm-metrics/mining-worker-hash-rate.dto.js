"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPoolWorkerHashRateContributionResponseDto = exports.ListPoolWorkerHashRateContributionRequestDto = exports.AddPoolWorkerHashRateContributionRequestDto = void 0;
const tslib_1 = require("tslib");
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
    tslib_1.__metadata("design:type", Object)
], AddPoolWorkerHashRateContributionRequestDto.prototype, "timeRange", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], AddPoolWorkerHashRateContributionRequestDto.prototype, "clientWorkers", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
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
    tslib_1.__metadata("design:type", Object)
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