"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFacilityInfoRequestDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class CreateFacilityInfoRequestDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateFacilityInfoRequestDto.prototype, "name", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateFacilityInfoRequestDto.prototype, "address", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], CreateFacilityInfoRequestDto.prototype, "estPowerUsageInKiloWatts", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], CreateFacilityInfoRequestDto.prototype, "estPowerCapacityInKiloWatts", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], CreateFacilityInfoRequestDto.prototype, "estPowerCostInMicros", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], CreateFacilityInfoRequestDto.prototype, "farenheitTemp", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateFacilityInfoRequestDto.prototype, "isAutoManaged", void 0);
exports.CreateFacilityInfoRequestDto = CreateFacilityInfoRequestDto;
//# sourceMappingURL=facility-info.dto.js.map