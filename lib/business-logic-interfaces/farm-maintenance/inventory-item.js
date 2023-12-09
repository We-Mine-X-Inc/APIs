"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryItemStatus = void 0;
var InventoryItemStatus;
(function (InventoryItemStatus) {
    InventoryItemStatus[InventoryItemStatus["UNKNOWN"] = 0] = "UNKNOWN";
    InventoryItemStatus[InventoryItemStatus["ORDERED"] = 1] = "ORDERED";
    InventoryItemStatus[InventoryItemStatus["NEEDS_TO_BE_ORDERED"] = 2] = "NEEDS_TO_BE_ORDERED";
    InventoryItemStatus[InventoryItemStatus["DECOMMISIONED"] = 3] = "DECOMMISIONED";
    InventoryItemStatus[InventoryItemStatus["NOT_IN_USE"] = 4] = "NOT_IN_USE";
    InventoryItemStatus[InventoryItemStatus["IN_USE"] = 5] = "IN_USE";
})(InventoryItemStatus = exports.InventoryItemStatus || (exports.InventoryItemStatus = {}));
//# sourceMappingURL=inventory-item.js.map