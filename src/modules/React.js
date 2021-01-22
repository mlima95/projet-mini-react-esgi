/**
 *
 * @param type
 * @param attrbs
 * @param content
 * @param childElement
 *
 * @return Object
 */
function createEl(type, attrbs, content, childElement) {
    return {
        type: type,
        attrbs: attrbs,
        content: content,
        childElement: childElement
    }
}

export const React = {
    createEl
}


//II] Pros: Update, Cons: generation
//  React.createElement => Object
//  Component.render => Object


//  ReactDOM.render =>
//    1) Object => DomElement
// {
//     type: 'button'
//     props: {
//         id: 'iddetest',
//         class: 'btn btn-primary',
//         content: 'Cliquer ici',
//     },
//     state: {
//         count: 0
//     }
// }
//    2) rootElement.appendChild(DomElement);
// <button id='iddetest' class='btn btn-primary'>Cliquer ici</button>
