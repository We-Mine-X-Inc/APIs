"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInventoryItemRequestDto = void 0;
const tslib_1 = require("tslib");
const miner_interface_1 = require("../../business-logic-interfaces/farm-maintenance/miner.interface");
const class_validator_1 = require("class-validator");
class CreateInventoryItemRequestDto {
    constructor() {
        this.operationalDependencies = [];
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsEnum)(miner_interface_1.InventoryItemType),
    tslib_1.__metadata("design:type", typeof (_a = typeof miner_interface_1.InventoryItemType !== "undefined" && miner_interface_1.InventoryItemType) === "function" ? _a : Object)
], CreateInventoryItemRequestDto.prototype, "type", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsEnum)(miner_interface_1.InventoryItemStatus),
    tslib_1.__metadata("design:type", typeof (_b = typeof miner_interface_1.InventoryItemStatus !== "undefined" && miner_interface_1.InventoryItemStatus) === "function" ? _b : Object)
], CreateInventoryItemRequestDto.prototype, "status", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateInventoryItemRequestDto.prototype, "model", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsArray)(),
    tslib_1.__metadata("design:type", Array)
], CreateInventoryItemRequestDto.prototype, "operationalDependencies", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", typeof (_c = typeof miner_interface_1.OperationalMetadata !== "undefined" && miner_interface_1.OperationalMetadata) === "function" ? _c : Object)
], CreateInventoryItemRequestDto.prototype, "operationalMetadata", void 0);
exports.CreateInventoryItemRequestDto = CreateInventoryItemRequestDto;
//# sourceMappingURL=inventory-item.dto.js.map