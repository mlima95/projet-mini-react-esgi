import Component from "../Modules/Component.js";
import {React} from "../Modules/React.js";

export class SubNav extends Component {

    state = {
        counter: 0,
        click: false
    }


    render() {
        return React.createEl(
            "div",
            {class: "nav-scroller py-1 mb-2"},
            React.createEl(
                "nav",
                {class: "nav d-flex justify-content-between"},
                [
                    React.createEl(
                        "a",
                        {class: "p-2 link-secondary", href: "#/blog"},
                        "Les gilets jaune"
                    ),
                    React.createEl(
                        "a",
                        {class: "p-2 link-secondary", href: "#/maCougar"},
                        "Ma brigitte"
                    ),
                    React.createEl(
                        "a",
                        {class: "p-2 link-secondary disabled"},
                        "Benala"
                    ),
                    React.createEl(
                        "a",
                        {class: "p-2 link-secondary disabled"},
                        "Les retraites"
                    ),
                    React.createEl(
                        "a",
                        {class: "p-2 link-secondary disabled"},
                        "Nous sommes en guerre"
                    ),
                    React.createEl(
                        "a",
                        {class: "p-2 link-secondary disabled"},
                        "Divers"
                    ),
                ]
            ),
        )
    }
}