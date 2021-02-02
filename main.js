import {React} from './src/modules/React.js'
import {ReactDom} from "./src/modules/ReactDom.js";
import Button from "./src/Component/Button.js";

let test = React.createEl('div', {
    'id': 'testId',
    'class': 'containe'
}, React.createEl('ul', {'id': 'test', 'class': 'btn btn-primary'}, "testul"));

ReactDom.render(document.getElementById('root'), test)
