import Component from "../modules/Component.js";
import {React} from "../modules/React.js";

export class Button extends Component {

    state = {
        counter: 0,
        click: false
    }

    render() {
        const click = () => {
            this.setState({counter: this.state.counter + 1, click: !this.state.click})
        }
        return React.createEl(
            "button",
            {
                type: {name: "chien"},
                sexe: "medor",
                personne: {
                    type: {
                        name: "polo"
                    }
                }
            },
            [click],
            "je suis un {type.name} {sexe} qui s'appelle {personne.type.name}"

        )

    }
}