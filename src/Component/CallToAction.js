import Component from "../Modules/Component.js";
import {React} from "../Modules/React.js";

export class CallToAction extends Component {

    render() {
        return React.createEl(
            "main",
            {},
            [
                React.createEl(
                    "main",
                    {class: "container"},
                    React.createEl(
                        "div",
                        {class: "p-4 p-md-5 mb-4 text-white rounded bg-manu"},
                        React.createEl(
                            "div",
                            {class: "col-md-6 px-0"},
                            [
                                React.createEl(
                                    "h1",
                                    {class: "display-4 fst-italic"},
                                    'Voici mon histoire',
                                ),
                                React.createEl(
                                    "p",
                                    {class: "lead my-3"},
                                    "C'est de la Poudre de perlimpinpin ✨"
                                ),
                                React.createEl(
                                    "br",
                                    {},
                                ),
                                React.createEl(
                                    "br",
                                    {},
                                ),
                                React.createEl(
                                    "br",
                                    {},
                                ),
                                React.createEl(
                                    "br",
                                    {},
                                ),
                                React.createEl(
                                    "br",
                                    {},
                                ),
                                React.createEl(
                                    "br",
                                    {},
                                ),
                                React.createEl(
                                    "br",
                                    {},
                                ),
                                React.createEl(
                                    "br",
                                    {},
                                ),
                                React.createEl(
                                    "br",
                                    {},
                                ),
                                React.createEl(
                                    "br",
                                    {},
                                ),
                                React.createEl(
                                    "p",
                                    {class: "lead mb-0"},
                                    [
                                        React.createEl(
                                            "a",
                                            {class: "text-white fw-bold", href: "#/blog"},
                                            "Lire la suite"
                                        ),
                                    ]
                                )
                            ],
                        ),
                    ),
                ),
            ]
        )
    }
}