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
var TemplateMethod;
(function (TemplateMethod) {
    var AbstractDisplay = /** @class */ (function () {
        function AbstractDisplay() {
        }
        // TSってfinal使えないんだ・・・
        AbstractDisplay.prototype.display = function () {
            this.open();
            for (var i = 0; i < 5; i++) {
                this.print();
            }
            this.close();
        };
        return AbstractDisplay;
    }());
    var CharDisplay = /** @class */ (function (_super) {
        __extends(CharDisplay, _super);
        // TSにはcharはないらしい。独自定義する必要がある
        function CharDisplay(c) {
            var _this = _super.call(this) || this;
            _this.c = c;
            return _this;
        }
        CharDisplay.prototype.open = function () {
            console.log("<<");
        };
        CharDisplay.prototype.print = function () {
            console.log(this.c);
        };
        CharDisplay.prototype.close = function () {
            console.log(">>");
        };
        return CharDisplay;
    }(AbstractDisplay));
    var StringDisplay = /** @class */ (function (_super) {
        __extends(StringDisplay, _super);
        function StringDisplay(str) {
            var _this = _super.call(this) || this;
            _this.str = str;
            return _this;
        }
        StringDisplay.prototype.open = function () {
            this.printLine();
        };
        StringDisplay.prototype.print = function () {
            console.log("| " + this.str + " |");
        };
        StringDisplay.prototype.close = function () {
            this.printLine();
        };
        StringDisplay.prototype.printLine = function () {
            var line = "+";
            for (var i = 0; i < this.str.length; i++) {
                line += "-";
            }
            line += "+";
            console.log(line);
        };
        return StringDisplay;
    }(AbstractDisplay));
    var Main = /** @class */ (function () {
        function Main() {
        }
        Main.prototype.main = function () {
            var displays = [];
            displays.push(new CharDisplay("c"));
            displays.push(new StringDisplay("hello"));
            displays.push(new StringDisplay("こんにちは"));
            for (var display in displays) {
                displays[display].display();
            }
        };
        return Main;
    }());
    new Main().main();
})(TemplateMethod || (TemplateMethod = {}));
//# sourceMappingURL=03_TemplateMethod.js.map