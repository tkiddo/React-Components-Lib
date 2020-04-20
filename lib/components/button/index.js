"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

require("./button.css");

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Button = function Button(props) {
  var _ClassNames;

  var type = props.type,
      className = props.className,
      size = props.size,
      onClick = props.onClick;
  var prefix = 'btn';
  var btnCls = (0, _classnames["default"])(prefix, className, (_ClassNames = {}, _defineProperty(_ClassNames, "".concat(prefix, "-").concat(type), type), _defineProperty(_ClassNames, "".concat(prefix, "-").concat(size), size), _ClassNames));
  console.log(btnCls);
  return /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: btnCls,
    onClick: onClick
  }, props.children);
};

exports.Button = Button;