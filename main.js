import {React} from './src/modules/React.js'
import {ReactDom} from "./src/modules/ReactDom.js";

let test = React.createEl('button', {
    'id': 'testButton',
    'class': 'btn btn-primary'
}, "content", React.createEl('ul', {
    'id': 'test',
    'class': 'btn btn-primary'
}, "testul"))

ReactDom.render(document.getElementById('root'), test)
