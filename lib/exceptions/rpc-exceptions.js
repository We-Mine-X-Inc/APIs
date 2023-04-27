"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RpcException = void 0;
class RpcException extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
        this.message = message;
    }
}
exports.RpcException = RpcException;
//# sourceMappingURL=rpc-exceptions.js.map