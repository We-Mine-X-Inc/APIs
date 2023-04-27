"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSupplierQuoteDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class CreateSupplierQuoteDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], CreateSupplierQuoteDto.prototype, "supplier", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateSupplierQuoteDto.prototype, "itemModel", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], CreateSupplierQuoteDto.prototype, "unitPrice", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], CreateSupplierQuoteDto.prototype, "quantity", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], CreateSupplierQuoteDto.prototype, "sourceDateInMillis", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], CreateSupplierQuoteDto.prototype, "expirationDateInMillis", void 0);
exports.CreateSupplierQuoteDto = CreateSupplierQuoteDto;
//# sourceMappingURL=supplier-quote.dto.js.map