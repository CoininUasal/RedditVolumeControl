"use strict";

var CommentBox = React.createClass({
    displayName: "CommentBox",

    render: function render() {
        return React.createElement(
            "div",
            { className: "commentBox" },
            "Hello, world! I am a CommentBox."
        );
    }
});

function DomReady(props) {
    var DOMloaded = props.Element;
    if (DOMloaded) {
        ReactDOM.render(React.createElement(CommentBox, null), document.getElementById('content'));
    }
}
DomReady({ Element: document.getElementById("content") ? true : false });

