import {React} from '../Modules/React.js';
import {LoadPosts} from "../Component/LoadPosts.js";
import {Header} from "../Component/Header.js";

export default [
    React.createEl(
        Header,
        undefined,
    ),
    React.createEl(
        LoadPosts,
        undefined,
    ),
]
