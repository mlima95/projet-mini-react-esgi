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
        if(this.state.posts.length > 0){
            this.state.posts.forEach(element =>{
                // console.log(element.title)
                ReactDom.render(document.getElementById('root'), React.createEl(
                    "h3",
                    {},
                    element.title,
                    [click]
                ))
            })

        }else{
            return React.createEl(
                "button",
                {},
                "Charger les posts",
                [click]
            )
        }

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