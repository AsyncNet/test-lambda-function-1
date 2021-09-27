"use strict";
exports.__esModule = true;
exports.handler = void 0;
var printer_1 = require("./printer");
function run() {
    (0, printer_1["default"])("Hello");
}
var handler = function (event, context) {
    run();
};
exports.handler = handler;
