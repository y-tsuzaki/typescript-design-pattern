"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FactoryMethod;
(function (FactoryMethod) {
    var Product = /** @class */ (function () {
        function Product() {
        }
        return Product;
    }());
    var Factory = /** @class */ (function () {
        function Factory() {
        }
        Factory.prototype.create = function (owner) {
            var p = this.createProduct(owner);
            this.registerProduct(p);
            return p;
        };
        return Factory;
    }());
    var IDCard = /** @class */ (function (_super) {
        __extends(IDCard, _super);
        function IDCard(owner) {
            var _this = _super.call(this) || this;
            console.log(owner + "のカードを作ります。");
            _this.owner = owner;
            return _this;
        }
        IDCard.prototype.use = function () {
            console.log(this.owner + "のカードを使います。");
        };
        IDCard.prototype.getOwner = function () {
            return this.owner;
        };
        return IDCard;
    }(Product));
    var IDCardFactory = /** @class */ (function (_super) {
        __extends(IDCardFactory, _super);
        function IDCardFactory() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.owners = [];
            return _this;
        }
        IDCardFactory.prototype.createProduct = function (owner) {
            return new IDCard(owner);
        };
        IDCardFactory.prototype.registerProduct = function (product) {
            this.owners.push(product.getOwner());
        };
        IDCardFactory.prototype.getOwners = function () {
            return this.owners;
        };
        return IDCardFactory;
    }(Factory));
    var Main = /** @class */ (function () {
        function Main() {
        }
        Main.prototype.main = function () {
            var factory = new IDCardFactory();
            var card1 = factory.create("つざき");
            var card2 = factory.create("ふじいかぜ");
            var card3 = factory.create("ほしのげん");
            card1.use();
            card2.use();
            card3.use();
        };
        return Main;
    }());
    new Main().main();
})(FactoryMethod || (FactoryMethod = {}));
//# sourceMappingURL=04_FactoryMethod.js.map