class Dial extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 1 }
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    componentDidMount() {
        this.startTimer();
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    tick() {
        this.setState({ count: (this.state.count + 1) });
    }

    startTimer() {
        clearInterval(this.timer)
        this.timer = setInterval(this.tick.bind(this), 10);
    }

    stopTimer() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div className="dialContainer">
                {this.props.degPostion.map(function (pos) {
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
                            g = (255 + 360 - 255 - position);
                        }
                    }

                    var dialId = "dialTick" + position;
                    var background = "rgb(" + r + "," + g + "," + b + ")";
                    var dialStyle = {
                        transform: trans,
                        background: background
                    };
                    return <div id={dialId} className="dialContainer-tick" value={pos} style={dialStyle}> <div className="dialContainer--default"></div></div>;
                }, this)}
            </div>
        );
    }
};


function InDOM(props) {
    var position = [];
    for (var i = 1; i <= 360; i++) {
        position.push(i);
    }
    if (props.Element) {
        ReactDOM.render(<Dial degPostion={position} />, document.getElementById("dial"));
    }


}

InDOM({ Element: document.getElementsByClassName("dial") ? true : false });