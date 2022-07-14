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
import { jsx as _jsx } from "react/jsx-runtime";
import "./mylabel.css";
/**
 * Custom component that allows you to define a Span with custom text and size.
 */
export var MyLabel = function (_a) {
    var _b = _a.label, label = _b === void 0 ? "No Label" : _b, _c = _a.size, size = _c === void 0 ? "normal" : _c, color = _a.color, allCaps = _a.allCaps, fontColor = _a.fontColor;
    var textToPresent = allCaps ? label.toUpperCase() : label;
    return (_jsx("span", __assign({ className: "label ".concat(size, " ").concat(color && "text-".concat(color)), style: { color: fontColor } }, { children: textToPresent })));
};
