"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSupplierQuoteRequestDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class CreateSupplierQuoteRequestDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], CreateSupplierQuoteRequestDto.prototype, "supplier", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateSupplierQuoteRequestDto.prototype, "itemModel", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], CreateSupplierQuoteRequestDto.prototype, "unitPrice", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], CreateSupplierQuoteRequestDto.prototype, "quantity", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], CreateSupplierQuoteRequestDto.prototype, "sourceDateInMillis", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], CreateSupplierQuoteRequestDto.prototype, "expirationDateInMillis", void 0);
exports.CreateSupplierQuoteRequestDto = CreateSupplierQuoteRequestDto;
//# sourceMappingURL=supplier-quote.dto.js.map