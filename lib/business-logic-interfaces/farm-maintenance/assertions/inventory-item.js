"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertInventoryItem = void 0;
function assertInventoryItem(value) {
    if (value.model === undefined)
        throw new Error("Not an InventoryItem");
}
exports.assertInventoryItem = assertInventoryItem;
//# sourceMappingURL=inventory-item.js.map