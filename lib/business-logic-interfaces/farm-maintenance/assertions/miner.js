"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertMiner = void 0;
function assertMiner(value) {
    if (value.marketDetails.model === undefined)
        throw new Error("Not an Miner");
}
exports.assertMiner = assertMiner;
//# sourceMappingURL=miner.js.map