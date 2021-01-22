import {React} from './src/modules/React.js'
import {ReactDom} from "./src/modules/ReactDom.js";

let test = React.createEl('button', {
    'id': 'testButton',
    'class': 'btn btn-primary'
}, "content", React.createEl('button', {'id': 'testButton', 'class': 'btn btn-primary'}, "content"))

ReactDom.render(document.getElementById('root'), test)
