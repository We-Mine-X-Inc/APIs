"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPoolWorkerHashRateContributionResponseDto = exports.ListPoolWorkerHashRateContributionRequestDto = exports.AddPoolWorkerHashRateContributionDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class AddPoolWorkerHashRateContributionDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], AddPoolWorkerHashRateContributionDto.prototype, "poolUsername", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], AddPoolWorkerHashRateContributionDto.prototype, "timeRange", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], AddPoolWorkerHashRateContributionDto.prototype, "clientWorkers", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], AddPoolWorkerHashRateContributionDto.prototype, "companyWorkers", void 0);
exports.AddPoolWorkerHashRateContributionDto = AddPoolWorkerHashRateContributionDto;
class ListPoolWorkerHashRateContributionRequestDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    tslib_1.__metadata("design:type", Array)
], ListPoolWorkerHashRateContributionRequestDto.prototype, "poolUsernames", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], ListPoolWorkerHashRateContributionRequestDto.prototype, "timeRange", void 0);
exports.ListPoolWorkerHashRateContributionRequestDto = ListPoolWorkerHashRateContributionRequestDto;
class ListPoolWorkerHashRateContributionResponseDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    tslib_1.__metadata("design:type", Array)
], ListPoolWorkerHashRateContributionResponseDto.prototype, "poolWorkerContributions", void 0);
exports.ListPoolWorkerHashRateContributionResponseDto = ListPoolWorkerHashRateContributionResponseDto;
//# sourceMappingURL=pool-worker-hash-rate-contribution.dto.js.map