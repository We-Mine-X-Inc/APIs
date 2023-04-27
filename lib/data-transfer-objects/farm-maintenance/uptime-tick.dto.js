"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUptimeTickDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class CreateUptimeTickDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    tslib_1.__metadata("design:type", Date)
], CreateUptimeTickDto.prototype, "datetime", void 0);
exports.CreateUptimeTickDto = CreateUptimeTickDto;
//# sourceMappingURL=uptime-tick.dto.js.map