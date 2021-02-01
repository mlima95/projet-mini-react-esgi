import {React} from './src/modules/React.js'
import {ReactDom} from "./src/modules/ReactDom.js";
import {Button} from "./src/Component/Button.js";

// let test = React.createEl('button', {
//     'id': 'testButton',
//     'class': 'btn btn-primary'
// }, "content", React.createEl('ul', {
//     'id': 'test',
//     'class': 'btn btn-primary'
// }, "testul"));
let button = new Button();
let buttonComponent = React.createEl(button, {title: "item1"}, "toto");

ReactDom.render(document.getElementById('root'), buttonComponent)
