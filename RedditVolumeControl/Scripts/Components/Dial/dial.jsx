var Dial = React.createClass({
    render: function () {
        return (
            <div className="dialContainer">
                <div className="dialContainer-tick"><span className="dialContainer-default"></span></div>
            </div>
        );
    }
});

function InDOM(props) {
    var DOMloaded = props.Element;
    if (DOMloaded) {
        ReactDOM.render(<Dial />, document.getElementById('dial'));
    }
}
InDOM({ Element: document.getElementById("dial") ? true : false })

