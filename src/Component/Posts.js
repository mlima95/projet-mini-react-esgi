import Component from "../Modules/Component.js";
import {React} from "../Modules/React.js";

export class Posts extends Component {

    state = {
        posts: {},
    }

    async getAllPost() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = await response.json();
        return posts;
    }

    async render() {
        this.state.posts = await this.getAllPost().then((e) => {

        })
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