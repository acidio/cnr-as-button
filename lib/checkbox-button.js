'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  label: _react2.default.PropTypes.string.isRequired,
  type: _react2.default.PropTypes.string.isRequired,
  input: _react2.default.PropTypes.shape({
    name: _react2.default.PropTypes.string.isRequired,
    value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.bool, _react2.default.PropTypes.Number])
  }),
  checked: _react2.default.PropTypes.bool,
  onChange: _react2.default.PropTypes.func
};

var defaultProps = {
  type: 'checkbox',
  checked: false,
  input: {},
  className: ''
};

var CheckboxButton = function (_Component) {
  _inherits(CheckboxButton, _Component);

  function CheckboxButton(props) {
    _classCallCheck(this, CheckboxButton);

    var _this = _possibleConstructorReturn(this, (CheckboxButton.__proto__ || Object.getPrototypeOf(CheckboxButton)).call(this, props));

    _this.handleOnChange = _this.handleOnChange.bind(_this);
    return _this;
  }

  _createClass(CheckboxButton, [{
    key: 'handleOnChange',
    value: function handleOnChange(e) {
      if (typeof this.props.onChange === 'function') {
        this.props.onChange(e, e.target.checked, e.target.value);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var label = _props.label;
      var type = _props.type;
      var input = _props.input;
      var checked = _props.checked;
      var className = _props.className;
      var value = _props.value;
      var id = _props.id;
      var bootstrap = _props.bootstrap;


      var html = _react2.default.createElement(
        'label',
        {
          className: 'cnr-as-button ' + (input.checked || checked ? 'checked' : '') + ' ' + className,
          htmlFor: id,
          role: 'button' },
        _react2.default.createElement('input', _extends({
          type: type,
          onChange: input.onChange || this.handleOnChange,
          value: input.value || value,
          checked: input.checked || checked
        }, input, {
          id: id
        })),
        label
      );

      if (bootstrap) {
        return _react2.default.createElement(
          'div',
          { className: 'btn-group' },
          html
        );
      }

      return html;
    }
  }]);

  return CheckboxButton;
}(_react.Component);

CheckboxButton.propTypes = propTypes;
CheckboxButton.defaultProps = defaultProps;

exports.default = CheckboxButton;