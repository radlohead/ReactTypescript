"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../../typings/index.d.ts" />
var React = require("react");
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        return _super.call(this) || this;
    }
    App.prototype.componentDidMount = function () {
        $("#datepicker").datepicker();
    };
    App.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h1", null, "Hello world!")));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=App.js.map