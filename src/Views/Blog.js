import {React} from '../Modules/React.js';
import {LoadPosts} from "../Component/LoadPosts.js";
import {NavBar} from "../Component/NavBar.js";
import {Footer} from "../Component/Footer.js";

export default [
    React.createEl(
        NavBar,
        undefined,
    ),
    React.createEl(
        LoadPosts,
        undefined,
    ),
    React.createEl(
        Footer,
        undefined,
    ),
]
