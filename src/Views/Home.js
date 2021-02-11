import {React} from '../Modules/React.js';
import {NavBar} from "../Component/NavBar.js";

export default [
    React.createEl(
        NavBar,
        undefined,
    ),
    React.createEl(
        'div',
        {},
        React.createEl(
            'p',
            {},
            'page 1'
        )
    ),
    React.createEl(
        'small',
        {},
        '© JS de merde'
    )
]
