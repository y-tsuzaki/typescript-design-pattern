"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var clone_1 = __importDefault(require("clone"));
var Prototype;
(function (Prototype) {
    var Manager = /** @class */ (function () {
        function Manager() {
            this.showcase = {};
        }
        Manager.prototype.register = function (name, proto) {
            this.showcase[name] = proto;
        };
        Manager.prototype.create = function (protoName) {
            var p = this.showcase[protoName];
            return p.createClone();
        };
        return Manager;
    }());
    var MessageBox = /** @class */ (function () {
        function MessageBox(symbol) {
            this.symbol = symbol;
        }
        MessageBox.prototype.use = function (s) {
            console.log("this is messagebox. " + this.symbol + ". " + s);
        };
        MessageBox.prototype.createClone = function () {
            return clone_1.default(this);
        };
        return MessageBox;
    }());
    var UnderlinePen = /** @class */ (function () {
        function UnderlinePen(symbol) {
            this.symbol = symbol;
        }
        UnderlinePen.prototype.use = function (s) {
            console.log("this is underlinepen. " + this.symbol + ". " + s);
        };
        UnderlinePen.prototype.createClone = function () {
            return clone_1.default(this);
        };
        return UnderlinePen;
    }());
    var Main = /** @class */ (function () {
        function Main() {
        }
        Main.prototype.main = function () {
            var manager = new Manager();
            var pen = new UnderlinePen('-');
            var box1 = new MessageBox('+');
            var box2 = new MessageBox('*');
            manager.register('pen1', pen);
            manager.register('box1', box1);
            manager.register('box2', box2);
            var p1 = manager.create('pen1');
            p1.use('hello');
            var b1 = manager.create('box1');
            b1.use('hello');
            var b2 = manager.create('box2');
            b2.use('hello');
        };
        return Main;
    }());
    (new Main()).main();
})(Prototype || (Prototype = {}));
//# sourceMappingURL=06_Prototype.js.map