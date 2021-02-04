function render(rootElement, createObject) {
    if (typeof createObject.type === 'object') {
        render(rootElement, createObject.type.display(createObject.props));
    } else {
        let myElement = document.createElement(createObject.type);
        for (const prop of Object.keys(createObject.props)) {
            myElement.setAttribute(prop.toString(), createObject.props[prop].toString())
        }

        if (typeof createObject.childElement === 'string') {


            let matchInterpolate = createObject.childElement.match(/{([^}]*)}/g).length;

            for(var i = 0; i < matchInterpolate; i++)
            {
                let childTextElement = createObject.childElement.match(/{([^}]*)}/);
                let result = createObject.props.prop_access(childTextElement[1])

                createObject.childElement = createObject.childElement.replace(createObject.childElement.match(/{([^}]*)}/)[0], result)
            }

            console.log(createObject.childElement)
 

            let nodeText = document.createTextNode(createObject.childElement);

            myElement.appendChild(nodeText);

        } else if (createObject.childElement === undefined) {
            console.log('pas d\'enfant')
        } else {
            render(myElement, createObject.childElement);
        }
        //génération du DOM
        return (
            rootElement.appendChild(myElement)
        )
    }
}


export const ReactDom = {
    render
}