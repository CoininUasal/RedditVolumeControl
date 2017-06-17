"use strict";

var Dial = React.createClass({
    displayName: "Dial",

    render: function render() {
        return React.createElement(
            "div",
            { className: "dialContainer" },
            React.createElement("div", { className: "dialContainer--default" })
        );
    }
});

function DomReady(props) {
    var DOMloaded = props.Element;
    if (DOMloaded) {
        ReactDOM.render(React.createElement(Dial, null), document.getElementById('dial'));
    }
}
DomReady({ Element: document.getElementById("dial") ? true : false });

