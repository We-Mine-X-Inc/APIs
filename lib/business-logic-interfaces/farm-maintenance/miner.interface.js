"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MINER_FIELDS_TO_POPULATE = exports.HashAlgorithmType = void 0;
var HashAlgorithmType;
(function (HashAlgorithmType) {
    HashAlgorithmType[HashAlgorithmType["UNKNOWN"] = 0] = "UNKNOWN";
    HashAlgorithmType[HashAlgorithmType["BLAKE_2S"] = 1] = "BLAKE_2S";
    HashAlgorithmType[HashAlgorithmType["SHA_256"] = 2] = "SHA_256";
})(HashAlgorithmType = exports.HashAlgorithmType || (exports.HashAlgorithmType = {}));
exports.MINER_FIELDS_TO_POPULATE = [
    {
        path: "metadata",
        populate: { path: "metadata" },
    },
];
//# sourceMappingURL=miner.interface.js.map