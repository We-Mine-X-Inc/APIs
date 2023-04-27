"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCoinMarketInfoDto = void 0;
const tslib_1 = require("tslib");
const coin_market_info_interface_1 = require("../../business-logic-interfaces/market-insights/coin-market-info.interface");
const class_validator_1 = require("class-validator");
class CreateCoinMarketInfoDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(coin_market_info_interface_1.CoinType),
    tslib_1.__metadata("design:type", Number)
], CreateCoinMarketInfoDto.prototype, "coinType", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], CreateCoinMarketInfoDto.prototype, "coinPrice", void 0);
exports.CreateCoinMarketInfoDto = CreateCoinMarketInfoDto;
//# sourceMappingURL=coin-market-info.dto.js.map