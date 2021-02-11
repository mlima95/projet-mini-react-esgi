import {React} from '../Modules/React.js';
import {Posts} from "../Component/Posts.js";
import {NavBar} from "../Component/NavBar.js";
import {Footer} from "../Component/Footer.js";

export default [
    React.createEl(
        NavBar,
        undefined,
    ),
    React.createEl(
        Posts,
        undefined,
    ),
    React.createEl(
        Footer,
        undefined,
    ),
]
