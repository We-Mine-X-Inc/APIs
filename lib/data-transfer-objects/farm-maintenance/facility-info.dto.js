"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFacilityInfoDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class CreateFacilityInfoDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateFacilityInfoDto.prototype, "name", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateFacilityInfoDto.prototype, "address", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], CreateFacilityInfoDto.prototype, "estPowerUsageInKiloWatts", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], CreateFacilityInfoDto.prototype, "estPowerCapacityInKiloWatts", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], CreateFacilityInfoDto.prototype, "estPowerCostInMicros", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], CreateFacilityInfoDto.prototype, "farenheitTemp", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateFacilityInfoDto.prototype, "isAutoManaged", void 0);
exports.CreateFacilityInfoDto = CreateFacilityInfoDto;
//# sourceMappingURL=facility-info.dto.js.map