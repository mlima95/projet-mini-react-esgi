import {React} from '../Modules/React.js';
import {NavBar} from "../Component/NavBar.js";
import {CallToAction} from "../Component/CallToAction.js";
import {Footer} from "../Component/Footer.js";

export default [
    React.createEl(
        NavBar,
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
