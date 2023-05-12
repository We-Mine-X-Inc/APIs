"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePoolRequestDto = void 0;
const tslib_1 = require("tslib");
const pool_interface_1 = require("../../business-logic-interfaces/farm-maintenance/pool.interface");
const class_validator_1 = require("class-validator");
class CreatePoolRequestDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], CreatePoolRequestDto.prototype, "creator", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreatePoolRequestDto.prototype, "protocol", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreatePoolRequestDto.prototype, "domain", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreatePoolRequestDto.prototype, "username", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsEnum)(pool_interface_1.PoolType),
    tslib_1.__metadata("design:type", Number)
], CreatePoolRequestDto.prototype, "poolType", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsEnum)(pool_interface_1.PoolPurposeType),
    tslib_1.__metadata("design:type", Number)
], CreatePoolRequestDto.prototype, "purpose", void 0);
exports.CreatePoolRequestDto = CreatePoolRequestDto;
//# sourceMappingURL=pool.dto.js.map