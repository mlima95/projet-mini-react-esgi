import Component from "../Modules/Component.js";
import {React} from "../Modules/React.js";

export class Footer extends Component {

    render() {
        return React.createEl(
            "main",
            {},
            [
                React.createEl(
                    "footer",
                    {class: "text-muted py-5"},
                    React.createEl(
                        "div",
                        {class: "container"},
                        React.createEl(
                            "p",
                            {class: "mb-1 text-center"},
                            "Made with 💛 © Alie Semoun - 4IW3 Thomas Lemoine, Milan Lima, Edouard Gacher"
                        ),
                    ),
                ),
            ]
        )
    }
}