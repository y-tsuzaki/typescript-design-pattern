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
// 継承でAdapterを実現するパターン
var Adapter_Inheritance;
(function (Adapter_Inheritance) {
    var Banner = /** @class */ (function () {
        function Banner(str) {
            this.str = str;
        }
        Banner.prototype.showWithParen = function () {
            console.log("(" + this.str + ")");
        };
        Banner.prototype.showWithAster = function () {
            console.log("*" + this.str + "*");
        };
        return Banner;
    }());
    // 継承でAdapterを実現するパターン
    var PrintBanner = /** @class */ (function (_super) {
        __extends(PrintBanner, _super);
        function PrintBanner(str) {
            return _super.call(this, str) || this;
        }
        PrintBanner.prototype.printWeek = function () {
            this.showWithParen();
        };
        PrintBanner.prototype.printStrong = function () {
            this.showWithAster();
        };
        return PrintBanner;
    }(Banner));
    var print = new PrintBanner("aaa");
    print.printStrong();
    print.printWeek();
})(Adapter_Inheritance || (Adapter_Inheritance = {}));
// 委譲を使ったもの
var Adapter_Delegation;
(function (Adapter_Delegation) {
    var Print = /** @class */ (function () {
        function Print() {
        }
        return Print;
    }());
    var Banner = /** @class */ (function () {
        function Banner(str) {
            this.str = str;
        }
        Banner.prototype.showWithParen = function () {
            console.log("(" + this.str + ")");
        };
        Banner.prototype.showWithAster = function () {
            console.log("*" + this.str + "*");
        };
        return Banner;
    }());
    var PrintBanner = /** @class */ (function (_super) {
        __extends(PrintBanner, _super);
        function PrintBanner(str) {
            var _this = _super.call(this) || this;
            _this.banner = new Banner(str);
            return _this;
        }
        PrintBanner.prototype.printWeek = function () {
            this.banner.showWithParen();
        };
        PrintBanner.prototype.printStrong = function () {
            this.banner.showWithAster();
        };
        return PrintBanner;
    }(Print));
    var print = new PrintBanner("bbb");
    print.printStrong();
    print.printWeek();
})(Adapter_Delegation || (Adapter_Delegation = {}));
//# sourceMappingURL=02_Adapter.js.map