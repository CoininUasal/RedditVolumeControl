var CommentBox = React.createClass({
    render: function () {
        return (
            <div className="commentBox">
                Hello, world! I am a CommentBox.
            </div> 
        );
    }
})

function InDOM(props) {
    var DOMloaded = props.Element;
    if (DOMloaded) {
        ReactDOM.render(<CommentBox />, document.getElementById('content'));
    }
}
InDOM({ Element: document.getElementById("content") ? true : false })



