var Dial = React.createClass({
    render: function () {
        var dialStyle = {
            transform:  this.props.degPostion + "deg" + " 0 " + "-" + this.props.degPostion + "deg"
        };

        return (
            <div className="dialContainer">
                <div className="dialContainer-tick"><div className="dialContainer--default" style={dialStyle}></div></div>
            </div>
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
            ReactDOM.render(<Dial degPostion={i} />, document.getElementById("dial" + i));
        }
    }
    
}

InDOM({ Element: document.getElementsByClassName("dial") ? true : false });

