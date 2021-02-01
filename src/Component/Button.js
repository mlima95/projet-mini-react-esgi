import Component from "../modules/Component";
import {React} from "../modules/React";

export class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            click: false,
            counter: 0

        }
    }


    render() {
        return React.createEl("button", {onClick: () => this.setState({click: true, counter: this.state.counter + 1})})
    }
}