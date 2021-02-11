import Component from "../Modules/Component.js";
import {React} from "../Modules/React.js";

export class Posts extends Component {

    state = {
        isLoaded: false,
        posts: {},
    }

    async componentDidMount() {
        console.log('componentDidMount')
        await this.getAllPost()
    }

    async getAllPost() {
        await fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
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

    render() {
        console.log('this.state.posts')
        console.log(this.state.posts)
        return React.createEl(
            "div",
            {class: 'posts', id: 'posts'},
            [
                this.state.posts.forEach(
                    element => {
                        return React.createEl(
                            "h3",
                            {},
                            element.title
                        )
                    }
                )
            ]
        )
    }
}