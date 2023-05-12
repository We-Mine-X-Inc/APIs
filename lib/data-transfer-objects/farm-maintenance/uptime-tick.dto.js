"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUptimeTickRequestDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class CreateUptimeTickRequestDto {
    constructor() {
        this.datetime = new Date(Date.now());
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsDate)(),
    tslib_1.__metadata("design:type", Date)
], CreateUptimeTickRequestDto.prototype, "datetime", void 0);
exports.CreateUptimeTickRequestDto = CreateUptimeTickRequestDto;
//# sourceMappingURL=uptime-tick.dto.js.map