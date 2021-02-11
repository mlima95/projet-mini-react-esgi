import Component from "../Modules/Component.js";
import {React} from "../Modules/React.js";
import {Button} from "./Button.js";
import {ReactDom} from "../Modules/ReactDom.js";

export class LoadPosts extends Component {

    state = {
        isLoaded: false,
        posts: {},
    }

    render() {
        const click = () => {
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then(res => res.json())
                .then(
                    (result) => {
                        this.setState({
                            isLoaded: true,
                            posts: result
                        });
                    },
                    (error) => {
                        console.error(error)
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    }
                )
        }
        if (this.state.posts.length > 0) {
            this.state.posts.forEach(element => {
                ReactDom.render(document.getElementById('root'), React.createEl(
                    "div",
                    {class: "row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm position-relative"},
                    React.createEl(
                        "div",
                        {class: "col p-4 d-flex flex-column position-static"},
                        [
                            React.createEl(
                                "h3",
                                {class: "mb-0"},
                                element.title
                            ),
                            React.createEl(
                                "p",
                                {class: "card-text"},
                                element.body
                            )
                        ]
                    )
                ))
            })

        } else {
            return React.createEl(
                "div",
                {class: "text-center pt-5 pb-5"},
                React.createEl(
                    "button",
                    {class: "btn btn-success"},
                    "Charger les propositions de la convention citoyenne",
                    [click]
                )
            )
        }
    }
}