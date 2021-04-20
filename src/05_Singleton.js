"use strict";
var Singleton;
(function (Singleton_1) {
    var Singleton = /** @class */ (function () {
        function Singleton() {
        }
        Singleton.getInstance = function () {
            return Singleton.singleton;
        };
        Singleton.prototype.greet = function () {
            console.log('こんにちは');
        };
        Singleton.singleton = new Singleton();
        return Singleton;
    }());
    var Main = /** @class */ (function () {
        function Main() {
        }
        Main.prototype.main = function () {
            var instance = Singleton.getInstance();
            instance.greet();
        };
        return Main;
    }());
    (new Main()).main();
})(Singleton || (Singleton = {}));
//# sourceMappingURL=05_Singleton.js.map