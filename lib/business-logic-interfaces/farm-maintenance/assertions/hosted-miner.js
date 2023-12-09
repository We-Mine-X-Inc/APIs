"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertHostedMiner = void 0;
function assertHostedMiner(value) {
    if (value.API === undefined)
        throw new Error("Not an HostedMiner");
}
exports.assertHostedMiner = assertHostedMiner;
//# sourceMappingURL=hosted-miner.js.map