"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMinerRequestDto = void 0;
const tslib_1 = require("tslib");
const inventory_item_1 = require("../../business-logic-interfaces/farm-maintenance/inventory-item");
const class_validator_1 = require("class-validator");
class CreateMinerRequestDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsEnum)(inventory_item_1.InventoryItemStatus),
    tslib_1.__metadata("design:type", Number)
], CreateMinerRequestDto.prototype, "status", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateMinerRequestDto.prototype, "model", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], CreateMinerRequestDto.prototype, "metadata", void 0);
exports.CreateMinerRequestDto = CreateMinerRequestDto;
//# sourceMappingURL=miner.dto.js.map