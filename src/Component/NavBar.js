import Component from "../modules/Component.js";
import {React} from "../modules/React.js";

export class NavBar extends Component {

    state = {
        counter: 0,
        click: false
    }

    render() {
        return React.createEl(
            "nav",
            {class: 'nav', id: 'test'},
            [
                React.createEl(
                    "li",
                    {class: "li-nav"},
                    'li-1'
                ),
                React.createEl(
                    "li",
                    {class: "li-nav"},
                    'li-2'
                ),
                React.createEl(
                    "li",
                    {class: "li-nav"},
                    'li-3'
                ),
                React.createEl(
                    "li",
                    {class: "li-nav"},
                    'li-4'
                )
            ]
        )
    }
}