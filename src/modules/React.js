String.prototype.interpolate = function (createObject) {
    let string = String(this);
    const lengthToInterpolate = string.match(/{([^}]*)}/g).length;
    for (let i = 0; i < lengthToInterpolate; i++) {
        let childTextElement = string.match(/{([^}]*)}/);
        let childTextElementMatch = createObject.props.prop_access(childTextElement[1]);
        string = string.replace(string.match(/{([^}]*)}/)[0], childTextElementMatch);
    }
    return string;
};

Object.prototype.prop_access = function (path) {
    let object = Object(this);
    if (object === null) return path + " not exist"
    if (typeof path !== "string" || path == "") return 'object';
    let decomposePath = path.split(".");
    let tab = [];
    for (let element of decomposePath) {
        tab.push(element);
        let tabJoin = tab.join('.');
        if (typeof (object[element]) == "undefined") {
            return tabJoin + " not exist";
        }
        object = object[element];
    }
    return object;
}

/**
 *
 * @param type
 * @param props
 * @param event
 * @param element
 *
 * @return Object
 */
function createEl(type, props, event, element) {

    //si component récupérer son render
    //si type class créer new et return render
    //@Check if type check
    let objComponent = {
        type: null,
        props: props,
        event: event,
        childElement: element
    }

    if (typeof type === 'string') {
        objComponent.type = type;
        return objComponent;
    } else {
        objComponent.type = new type();
        console.log(objComponent)
        return objComponent;
    }
}

export const React = {
    createEl
}

//nomFunction.name
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
