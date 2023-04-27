"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMinerMarketInfoDto = void 0;
const tslib_1 = require("tslib");
const coin_market_info_interface_1 = require("../../business-logic-interfaces/market-insights/coin-market-info.interface");
const class_validator_1 = require("class-validator");
class CreateMinerMarketInfoDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(coin_market_info_interface_1.CoinType),
    tslib_1.__metadata("design:type", Number)
], CreateMinerMarketInfoDto.prototype, "coinType", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], CreateMinerMarketInfoDto.prototype, "minerInventoryItem", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], CreateMinerMarketInfoDto.prototype, "dailyCoinEarning", void 0);
exports.CreateMinerMarketInfoDto = CreateMinerMarketInfoDto;
//# sourceMappingURL=miner-market-info.dto.js.map