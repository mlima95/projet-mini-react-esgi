/**
 *
 * @param type
 * @param attrbs
 * @param content
 * @param childElement
 *
 * @return Object
 */
function createEl(type, props, childElement) {

    //si component récupérer son render
    //si type class créer new et return render
    //@Check if type check
    if (type === "div") 
    {
        //console.log('ceci est une div');
        let obj = {
            type: type,
            props: props,
            childElement: childElement
         }

        console.log(obj)
    } 
    else if(type === "nav")
    {
        console.log('ceci est une nav');
    }
    else {
        let obj2 = {
            type: new type(),
            props: props,
            childElement: childElement
        }

        console.log(obj2)
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
