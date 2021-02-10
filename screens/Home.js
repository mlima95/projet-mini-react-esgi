import {React} from '../src/modules/React.js';
import {ReactDom} from '../src/modules/ReactDom.js'
import {Button} from "../src/Component/Button.js";
import route from "../src/Component/Router.js";
import {NavBar} from "../src/Component/NavBar.js";

export default React.createEl(
        'div', 
        {id: 'test'}, 
        React.createEl(
            'p',
            {id:'test'},
            'ok'
        )
    )
