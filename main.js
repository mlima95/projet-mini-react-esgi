import {React} from './src/modules/React.js'
import {Button} from "./src/Component/Button.js";
import route from "./src/Component/Router.js";

let buttonComponent4 = React.createEl(Button, {title: "item1", sexe: 'femme'}, on);
let buttonComponent5 = React.createEl(Button, {title: "page2"}, "test page 2");

route('/', 'home', null);
route('/page1', 'template1', buttonComponent4);
route('/page2', 'template2', buttonComponent5);