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
                    React.createEl(
                        "a",
                        {href: "#"},
                        'Home'
                    )
                ),
                React.createEl(
                    "li",
                    {class: "li-nav"},
                    React.createEl(
                        "a",
                        {href: "#/page1"},
                        'Page1'
                    )
                ),
                React.createEl(
                    "li",
                    {class: "li-nav"},
                    React.createEl(
                        "a",
                        {href: "#/page2"},
                        'Page2'
                    )
                ),
            ]
        )
    }
}