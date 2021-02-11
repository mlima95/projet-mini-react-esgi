import Component from "../Modules/Component.js";
import {React} from "../Modules/React.js";
import {Button} from "./Button.js";

export class LoadPosts extends Component {

    state = {
        isLoaded: false,
        posts: {},
    }

    render() {
        const click = () => {
            console.log('click')
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then(res => res.json())
                .then(
                    (result) => {
                        this.setState({isLoaded: true});
                        return result.forEach(element =>
                            React.createEl(
                                "h3",
                                {},
                                "toto",
                            )
                        );
                    },
                    // Remarque : il est important de traiter les erreurs ici
                    // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
                    // des exceptions provenant de réels bugs du composant.
                    (error) => {
                        console.error(error)
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    }
                )
        }
        return React.createEl(
            "button",
            {},
            "Charger les posts",
            [click]
        )
        //     return React.createEl(
        //         "div",
        //         {class: 'posts', id: 'posts'},
        //         [
        //             this.state.posts.forEach(
        //                 element => {
        //                     return React.createEl(
        //                         "h3",
        //                         {},
        //                         element.title
        //                     )
        //                 }
        //             )
        //         ]
        //     )
        // }
    }
}