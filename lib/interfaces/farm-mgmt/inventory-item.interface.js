"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INVENTORY_ITEM_FIELDS_TO_POPULATE = exports.HashAlgorithmType = exports.InventoryItemStatus = exports.InventoryItemType = void 0;
var InventoryItemType;
(function (InventoryItemType) {
    InventoryItemType[InventoryItemType["UNKNOWN"] = 0] = "UNKNOWN";
    InventoryItemType[InventoryItemType["MINER"] = 1] = "MINER";
    InventoryItemType[InventoryItemType["ETHERNET_CABLE"] = 2] = "ETHERNET_CABLE";
    InventoryItemType[InventoryItemType["POWER_CABLE"] = 3] = "POWER_CABLE";
    InventoryItemType[InventoryItemType["WIFI_ROUTER"] = 4] = "WIFI_ROUTER";
    InventoryItemType[InventoryItemType["MINER_FAN"] = 5] = "MINER_FAN";
    InventoryItemType[InventoryItemType["POWER_SWITCH"] = 6] = "POWER_SWITCH";
})(InventoryItemType = exports.InventoryItemType || (exports.InventoryItemType = {}));
var InventoryItemStatus;
(function (InventoryItemStatus) {
    InventoryItemStatus[InventoryItemStatus["UNKNOWN"] = 0] = "UNKNOWN";
    InventoryItemStatus[InventoryItemStatus["ORDERED"] = 1] = "ORDERED";
    InventoryItemStatus[InventoryItemStatus["NEEDS_TO_BE_ORDERED"] = 2] = "NEEDS_TO_BE_ORDERED";
    InventoryItemStatus[InventoryItemStatus["DECOMMISIONED"] = 3] = "DECOMMISIONED";
    InventoryItemStatus[InventoryItemStatus["NOT_IN_USE"] = 4] = "NOT_IN_USE";
    InventoryItemStatus[InventoryItemStatus["IN_USE"] = 5] = "IN_USE";
})(InventoryItemStatus = exports.InventoryItemStatus || (exports.InventoryItemStatus = {}));
var HashAlgorithmType;
(function (HashAlgorithmType) {
    HashAlgorithmType[HashAlgorithmType["UNKNOWN"] = 0] = "UNKNOWN";
    HashAlgorithmType[HashAlgorithmType["BLAKE_2S"] = 1] = "BLAKE_2S";
    HashAlgorithmType[HashAlgorithmType["SHA_256"] = 2] = "SHA_256";
})(HashAlgorithmType = exports.HashAlgorithmType || (exports.HashAlgorithmType = {}));
exports.INVENTORY_ITEM_FIELDS_TO_POPULATE = [
    {
        path: "operationalDependencies",
        populate: { path: "operationalDependencies" },
    },
];
//# sourceMappingURL=inventory-item.interface.js.map