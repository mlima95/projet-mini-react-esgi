import Component from "../Modules/Component.js";
import {React} from "../Modules/React.js";

export class CallToAction extends Component {

    render() {
        return React.createEl(
            "main",
            {},
            [
                React.createEl(
                    "div",
                    {class: "text-center"},
                    React.createEl(
                        "img",
                        {src: "https://www.tonmag.fr/wp-content/uploads/2019/12/Emmanuel-Macron-1.jpg", width: "30%"}
                    ),
                ),
                React.createEl(
                    "section",
                    {class: "text-center container"},
                    React.createEl(
                        "div",
                        {class: "row py-lg-5"},
                        React.createEl(
                            "div",
                            {class: "col-lg-6 col-md-8 mx-auto"},
                            React.createEl(
                                "h1",
                                {class: "fw-light"},
                                'Voici mon histoire',
                            ),
                        ),
                    ),
                ),
                React.createEl(
                    "p",
                    {class: "text-center"},
                    React.createEl(
                        "a",
                        {href: "#/blog", class: "btn btn-warning my-2"},
                        "Les gilets jaune"
                    ),

                ),
            ]
        )
    }
}