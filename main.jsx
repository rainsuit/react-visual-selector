// LazyLogging 
const log = console.log;
// React LazyVariables
const Component = React.Component;



class Selector extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="selectorBox">
                SelectorBox
                <div className="selectorCircle"></div>
            </div>
        )
    }
}


class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="mainContainer">
            Selectors Target Name
            <Selector />
            </div>
        )
    }
}


ReactDOM.render(
    <Main />,
    document.getElementById('main')
)