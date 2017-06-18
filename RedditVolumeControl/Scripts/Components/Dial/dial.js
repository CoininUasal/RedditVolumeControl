"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dial = (function (_React$Component) {
    _inherits(Dial, _React$Component);

    function Dial(props) {
        _classCallCheck(this, Dial);

        _get(Object.getPrototypeOf(Dial.prototype), "constructor", this).call(this, props);
        this.state = { count: 1 };
    }

    _createClass(Dial, [{
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            clearInterval(this.timer);
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.startTimer();
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            return true;
        }
    }, {
        key: "tick",
        value: function tick() {
            this.setState({ count: this.state.count + 1 });
        }
    }, {
        key: "startTimer",
        value: function startTimer() {
            clearInterval(this.timer);
            this.timer = setInterval(this.tick.bind(this), 10);
        }
    }, {
        key: "stopTimer",
        value: function stopTimer() {
            clearInterval(this.timer);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "dialContainer" },
                this.props.degPostion.map(function (pos) {
                    var c = 0;
                    if (this.state.count == 360) {
                        this.setState({ count: 1 });
                    }
                    c = this.state.count;

                    var position = pos + c;
                    if (position > 360) {
                        position = 360 - position;
                    }

                    var x = "rotate(" + pos + "deg) ";
                    var t = " translate(230px) ";
                    var y = "rotate(135deg)";
                    var trans = x + t + y;
                    var r = 255;
                    var g = 0;
                    var b = 0;

                    if (c > 0) {
                        r = 255;
                        g = 255;
                        b = 105;
                        if (position <= 255) {
                            g = position;
                            b = 0;
                        } else {
                            b = -(255 - position);
                        }
                    } else {
                        r = 255;
                        g = 0;
                        b = 0;
                        if (position <= 105) {
                            g = 255;
                            b = 105 - position;
                        } else {
                            g = 255 + 360 - 255 - position;
                        }
                    }

                    var dialId = "dialTick" + position;
                    var background = "rgb(" + r + "," + g + "," + b + ")";
                    var dialStyle = {
                        transform: trans,
                        background: background
                    };
                    return React.createElement(
                        "div",
                        { id: dialId, className: "dialContainer-tick", value: pos, style: dialStyle },
                        " ",
                        React.createElement("div", { className: "dialContainer--default" })
                    );
                }, this)
            );
        }
    }]);

    return Dial;
})(React.Component);

;

function InDOM(props) {
    var position = [];
    for (var i = 1; i <= 360; i++) {
        position.push(i);
    }
    if (props.Element) {
        ReactDOM.render(React.createElement(Dial, { degPostion: position }), document.getElementById("dial"));
    }
}

InDOM({ Element: document.getElementsByClassName("dial") ? true : false });

