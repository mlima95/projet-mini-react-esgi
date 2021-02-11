import Component from "../Modules/Component.js";
import {React} from "../Modules/React.js";

export class NavBar extends Component {

    state = {
        counter: 0,
        click: false
    }


    render() {
        return React.createEl(
            "header",
            {class: "d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-body border-bottom shadow-sm"},
            [
                React.createEl(
                    "p",
                    {class: "h5 my-0 me-md-auto fw-normal"},
                    'Le journal intime de Manu',
                ),
            ]
        )
    }
}