import Component from "../modules/Component.js";
import {React} from "../modules/React.js";

export class Button extends Component {

    state = {
        counter: 0,
        click: false
    }

    render() {
        return React.createEl(
            "button",
            {
                onclick: () => this.setState({counter: this.state.counter + 1, click: !this.state.click}),
                disabled: this.state.click,
                type: {name: "chien"},
                sexe: {sexe: "medor"},
            },
            "je suis un {type.name} {sexe.sexe}"

        )
    }
}