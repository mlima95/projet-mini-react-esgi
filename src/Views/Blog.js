import {React} from '../Modules/React.js';
import {LoadPosts} from "../Component/LoadPosts.js";
import {Header} from "../Component/Header.js";
import {SubNav} from "../Component/SubNav.js";

export default [
    React.createEl(
        Header,
        undefined,
    ),
    React.createEl(
        SubNav,
        undefined,
    ),
    React.createEl(
        LoadPosts,
        undefined,
    ),
]
