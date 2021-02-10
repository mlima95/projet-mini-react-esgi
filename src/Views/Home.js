import {React} from '../modules/React.js';
import {NavBar} from "../Component/NavBar.js";

export default [React.createEl(
        NavBar,
        undefined,
    ),

    React.createEl(
        'div',
        {id: 'test'},
        
        React.createEl(
            'p',
            {id: 'test'},
            'page 1'
        )
    ),

    React.createEl(
        'p',
        {id: 'test'},
        'page 1'
    )
]
