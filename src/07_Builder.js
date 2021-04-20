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
var fs = require("fs");
var Builder;
(function (Builder_1) {
    var Builder = /** @class */ (function () {
        function Builder() {
        }
        return Builder;
    }());
    var Director = /** @class */ (function () {
        function Director(builder) {
            this.builder = builder;
        }
        Director.prototype.constract = function () {
            this.builder.makeTitle("タイトル");
            this.builder.makeString("これは本文");
            this.builder.makeItems(["りんご", "ごりら", "ラッパ"]);
            this.builder.makeString("これも本文");
            this.builder.makeItems(["プロテイン", "グルタミン", "ケトジェニック"]);
            this.builder.close();
        };
        return Director;
    }());
    var TextBuilder = /** @class */ (function (_super) {
        __extends(TextBuilder, _super);
        function TextBuilder() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.buffer = "";
            return _this;
        }
        TextBuilder.prototype.makeTitle = function (title) {
            this.buffer += "===============================\n";
            this.buffer += "\u300C" + title + "\u300D\n\n";
        };
        TextBuilder.prototype.makeString = function (str) {
            this.buffer += "\u25A1" + str + "\n\n";
        };
        TextBuilder.prototype.makeItems = function (items) {
            var _this = this;
            items.forEach(function (item) {
                _this.buffer += "- " + item + " \n";
            });
            this.buffer += "\n";
        };
        TextBuilder.prototype.close = function () {
            this.buffer += "===============================\n";
        };
        TextBuilder.prototype.getResult = function () {
            return this.buffer;
        };
        return TextBuilder;
    }(Builder));
    var MarkDownBuilder = /** @class */ (function (_super) {
        __extends(MarkDownBuilder, _super);
        function MarkDownBuilder() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.buffer = "";
            return _this;
        }
        MarkDownBuilder.prototype.makeTitle = function (title) {
            this.buffer += "# " + title + "\n\n";
        };
        MarkDownBuilder.prototype.makeString = function (str) {
            this.buffer += str + "\n\n";
        };
        MarkDownBuilder.prototype.makeItems = function (items) {
            var _this = this;
            items.forEach(function (item) {
                _this.buffer += "- " + item + " \n";
            });
            this.buffer += "\n";
        };
        MarkDownBuilder.prototype.close = function () {
            this.buffer;
            fs.writeFileSync("output.txt", this.buffer);
        };
        MarkDownBuilder.prototype.getResult = function () {
            return "output.txt";
        };
        return MarkDownBuilder;
    }(Builder));
    var Main = /** @class */ (function () {
        function Main() {
        }
        Main.prototype.main = function () {
            {
                var textBuilder = new TextBuilder();
                var director = new Director(textBuilder);
                director.constract();
                var result = textBuilder.getResult();
                console.log(result);
            }
            {
                var markDownBuilder = new MarkDownBuilder();
                var director = new Director(markDownBuilder);
                director.constract();
                var result = markDownBuilder.getResult();
                console.log(result);
                fs.readFile(result, "utf-8", function (_err, data) {
                    console.log(data);
                });
            }
        };
        return Main;
    }());
    new Main().main();
})(Builder || (Builder = {}));
