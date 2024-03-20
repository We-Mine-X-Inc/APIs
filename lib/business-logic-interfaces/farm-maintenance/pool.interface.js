"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POOL_FIELDS_TO_POPULATE = exports.PoolType = exports.PoolPurposeType = void 0;
var PoolPurposeType;
(function (PoolPurposeType) {
    PoolPurposeType[PoolPurposeType["UNKNOWN"] = 0] = "UNKNOWN";
    PoolPurposeType[PoolPurposeType["MINING_FEE"] = 1] = "MINING_FEE";
    PoolPurposeType[PoolPurposeType["PURE_COMPANY_REVENUE"] = 2] = "PURE_COMPANY_REVENUE";
    PoolPurposeType[PoolPurposeType["CLIENT_REVENUE"] = 3] = "CLIENT_REVENUE";
})(PoolPurposeType = exports.PoolPurposeType || (exports.PoolPurposeType = {}));
var PoolType;
(function (PoolType) {
    PoolType[PoolType["UNKNOWN"] = 0] = "UNKNOWN";
    PoolType[PoolType["SLUSH_POOL"] = 1] = "SLUSH_POOL";
    PoolType[PoolType["POOL_MARS"] = 2] = "POOL_MARS";
    PoolType[PoolType["DX_POOL"] = 3] = "DX_POOL";
    PoolType[PoolType["ANT_POOL"] = 4] = "ANT_POOL";
})(PoolType = exports.PoolType || (exports.PoolType = {}));
exports.POOL_FIELDS_TO_POPULATE = ["creator"];
//# sourceMappingURL=pool.interface.js.map