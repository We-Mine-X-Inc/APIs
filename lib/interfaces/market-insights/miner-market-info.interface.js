"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MINER_MARKET_INFO_FIELDS_TO_POPULATE = void 0;
exports.MINER_MARKET_INFO_FIELDS_TO_POPULATE = [
    {
        path: "minerInventoryItem",
        populate: { path: "operationalDependencies" },
    },
];
//# sourceMappingURL=miner-market-info.interface.js.map