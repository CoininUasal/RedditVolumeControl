var Dial = React.createClass({
    displayName: "Dial",

    render: function () {
        return React.createElement(
            "div",
            { className: "dialContainer" },
            React.createElement(
                "div",
                { className: "dialContainer-tick" },
                React.createElement("div", { className: "dialContainer--default " })
            )
        );
    }
});

function InDOM(props) {
    var DOMloaded = props.Element;
    if (DOMloaded) {
        ReactDOM.render(React.createElement(Dial, null), document.getElementById('dial'));
    }
}
InDOM({ Element: document.getElementById("dial") ? true : false });