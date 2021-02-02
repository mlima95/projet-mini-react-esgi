import Component from "../modules/Component.js";
import {React} from "../modules/React.js";

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            click: false,
            counter: 0
        }
    }

    render() {
        return React.createEl("button", {
            onClick: () => this.setState({
                click: true,
                counter: this.state.counter + 1
            }, {click: false, counter: this.state.counter + 4})
        })
    }
}

export default Button;