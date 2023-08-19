var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Controller } from "react-hook-form";
var Input = function (_a) {
    var label = _a.label, error = _a.error, name = _a.name, rest = __rest(_a, ["label", "error", "name"]);
    return (_jsxs("div", __assign({ className: "mb-4" }, { children: [_jsx("label", __assign({ className: "block text-gray-700" }, { children: label })), _jsx(Controller, { name: name, render: function (_a) {
                    var field = _a.field;
                    return (_jsx("input", __assign({ className: "mt-1 p-2 border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300 ".concat(error ? "border-red-500" : "border-gray-300") }, field, rest)));
                } }), error && _jsx("p", __assign({ className: "text-red-500 mt-1" }, { children: error }))] })));
};
export default Input;
