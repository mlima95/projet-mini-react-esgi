// import Component from './src/modules/Component.js'
import {React} from './src/modules/React.js'

React.render(
    document.getElementById('root'), [
        React.createElem('div', {'id': '1', 'class': 'test'}, 'content'),
        React.createElem('div'),
        React.createElem('ul', {'id': '1', 'class': 'test'}, null,
            React.createElem('li', {
                'id': 'testid',
                'class': 'test'
            }, 'content'))
    ]
)


// class Button extends Component {
//     render() {
//         return (
//             document.getElementById('root'), [
//                 React.createElem('div', {'id': '1', 'class': 'test'}, 'content'),
//                 React.createElem('div'),
//             ]
//         );
//     }
// }
