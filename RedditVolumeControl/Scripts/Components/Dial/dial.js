"use strict";

var Dial = React.createClass({
    displayName: "Dial",

    render: function render() {
        var dialStyle = {
            transform: this.props.degPostion + "deg" + " 0 " + "-" + this.props.degPostion + "deg"
        };

        return React.createElement(
            "div",
            { className: "dialContainer" },
            React.createElement(
                "div",
                { className: "dialContainer-tick" },
                React.createElement("div", { className: "dialContainer--default", style: dialStyle })
            )
        );
    }
});

function InDOM(props) {
    var DOMloaded = props.Element;
    var elememts = document.getElementsByClassName("dial");
    var position = 1;
    for (var i = 0; i < elememts.length; i++) {
        if (DOMloaded) {
            var id = "dial" + position;
            console.log(id);
            console.log(document.getElementById(i));
            ReactDOM.render(React.createElement(Dial, { degPostion: i }), document.getElementById("dial" + i));
        }
    }
}

InDOM({ Element: document.getElementsByClassName("dial") ? true : false });

