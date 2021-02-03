/**
 *
 * @param type
 * @param attrbs
 * @param content
 * @param childElement
 *
 * @return Object
 */
function createEl(type, props, element) {

    //si component récupérer son render
    //si type class créer new et return render
    //@Check if type check
    let objComponent = {
        type: null,
        props: props,
        childElement: element
    }

    if (typeof type === 'string') {
        objComponent.type = type;
        return objComponent;
    } else {
        objComponent.type = new type();
        return objComponent;
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
