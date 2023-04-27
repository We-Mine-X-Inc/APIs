"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartPoolSwitchDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const mongoose_1 = require("mongoose");
class StartPoolSwitchDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", mongoose_1.Types.ObjectId)
], StartPoolSwitchDto.prototype, "contractId", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", String)
], StartPoolSwitchDto.prototype, "startingPoolIndex", void 0);
exports.StartPoolSwitchDto = StartPoolSwitchDto;
//# sourceMappingURL=pool-switch.dto.js.map