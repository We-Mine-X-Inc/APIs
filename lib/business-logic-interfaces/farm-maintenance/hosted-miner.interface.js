"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HOSTED_MINER_FILEDS_TO_POPULATE = exports.MinerApiType = exports.MinerNetworkStatus = void 0;
var MinerNetworkStatus;
(function (MinerNetworkStatus) {
    MinerNetworkStatus[MinerNetworkStatus["UNKNOWN"] = 0] = "UNKNOWN";
    MinerNetworkStatus[MinerNetworkStatus["OFFLINE"] = 1] = "OFFLINE";
    MinerNetworkStatus[MinerNetworkStatus["ONLINE"] = 2] = "ONLINE";
})(MinerNetworkStatus = exports.MinerNetworkStatus || (exports.MinerNetworkStatus = {}));
var MinerApiType;
(function (MinerApiType) {
    MinerApiType[MinerApiType["UNKNOWN"] = 0] = "UNKNOWN";
    MinerApiType[MinerApiType["ANTMINER"] = 1] = "ANTMINER";
    MinerApiType[MinerApiType["GOLDSHELL"] = 2] = "GOLDSHELL";
    MinerApiType[MinerApiType["BRAIINS"] = 3] = "BRAIINS";
})(MinerApiType = exports.MinerApiType || (exports.MinerApiType = {}));
exports.HOSTED_MINER_FILEDS_TO_POPULATE = [
    { path: "owner" },
    { path: "miner", populate: { path: "metadata" } },
];
//# sourceMappingURL=hosted-miner.interface.js.map