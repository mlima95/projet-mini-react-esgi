import Component from "../Modules/Component.js";
import {React} from "../Modules/React.js";

export class Header extends Component {

    state = {
        counter: 0,
        click: false
    }


    render() {
        return React.createEl(
            "header",
            {class: "blog-header py-3"},
            React.createEl(
                "div",
                {class: "row flex-nowrap justify-content-between align-items-center"},
                [
                    React.createEl(
                        "div",
                        {class: "col-4 pt-1"},
                        React.createEl(
                            "a",
                            {class: "link-secondary"},
                            'Souscrivez à un abonnement',
                        ),
                    ),
                    React.createEl(
                        "div",
                        {class: "col-4 text-center"},
                        React.createEl(
                            "a",
                            {class: "blog-header-logo text-dark"},
                            'Le journal de Manu',
                        ),
                    ),
                    React.createEl(
                        "div",
                        {class: "col-4 d-flex justify-content-end align-items-center"},
                        React.createEl(
                            "a",
                            {class: "btn btn-sm btn-outline-secondary"},
                            'Se connecter',
                        ),
                    ),
                ]
            ),
        )
    }
}