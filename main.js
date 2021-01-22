import {React} from './src/modules/React.js'
import Component from "./src/modules/Component.js";

class Button extends Component {

    constructor(props) {
        super(props);
        this.state = {
            click: false
        }
    }

    render() {
        return (
            React.createElem('button', {'id': 'testButton', 'class': 'btn btn-primary'}, "content")
        )
    }
}

console.log(Button)


React.render(
    document.getElementById('root'), [
        React.createElem(Button)
    ]
)

