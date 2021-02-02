String.prototype.interpolate = function (o) {
    return this.replace(/{([^{}]*)}/g,
        function (a, b) {
            var r = o[b];
            return typeof r === 'string' || typeof r === 'number' ? r : a;
        }
    );
};

/**
 *
 *
 * @return Object
 * @param tagOrElement
 * @param props
 * @param children
 */
function createEl(tagOrElement, props, children) {

    

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
