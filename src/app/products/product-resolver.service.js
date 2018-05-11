"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var router_1 = require("@angular/router");
var product_service_1 = require("./product.service");
var Observable_1 = require("rxjs/Observable");
var core_1 = require("@angular/core");
var ProductResolver = (function () {
    function ProductResolver(productService, router) {
        this.productService = productService;
        this.router = router;
    }
    ProductResolver.prototype.resolve = function (route, state) {
        var _this = this;
        var id = route.params['id'];
        if (isNaN(id)) {
            console.error("Product id was not a number: " + id);
            this.router.navigate(['/products']);
            return Observable_1.Observable.of(null);
        }
        return this.productService.getProduct(+id)
            .map(function (p) {
            if (p) {
                console.info("Product was not found: " + id);
                return p;
            }
            console.info("Product was not found: " + id);
            _this.router.navigate(['/products']);
            return null;
        })
            .catch(function (error) {
            console.error("Retrieval error: " + error);
            _this.router.navigate(['/products']);
            return Observable_1.Observable.of(null);
        });
    };
    ProductResolver = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [product_service_1.ProductService, router_1.Router])
    ], ProductResolver);
    return ProductResolver;
}());
exports.ProductResolver = ProductResolver;
//# sourceMappingURL=product-resolver.service.js.map