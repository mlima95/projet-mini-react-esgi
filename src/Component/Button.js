import Component from "../modules/Component.js";
import {React} from "../modules/React.js";

export class Button extends Component {

    state = {
        counter: 0
    }

    render() {
        return React.createEl(
            "button",
            { onclick: () => setState({counter: this.state.counter +1}), counter: this.state.counter},
            "toto"
        )
    }
}