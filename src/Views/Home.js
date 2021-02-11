import {React} from '../Modules/React.js';
import {Header} from "../Component/Header.js";
import {CallToAction} from "../Component/CallToAction.js";
import {Footer} from "../Component/Footer.js";
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
        CallToAction,
        undefined,
    ),
    React.createEl(
        Footer,
        undefined,
    ),
]
