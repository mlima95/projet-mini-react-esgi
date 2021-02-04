function render(rootElement, createObject) {
    if (typeof createObject.type === 'object') {
        render(rootElement, createObject.type.display(createObject.props));
    } else {
        let myElement = document.createElement(createObject.type);
        for (const prop of Object.keys(createObject.props)) {
            myElement.setAttribute(prop.toString(), createObject.props[prop].toString())
        }

        if (typeof createObject.childElement === 'string') {

            let valueInterpolate = createObject.props.prop_access(createObject.childElement.substring(
                createObject.childElement.lastIndexOf("{") + 1,
                createObject.childElement.lastIndexOf("}")
            ))

            let nodeText = document.createTextNode(createObject.childElement.interpolate(valueInterpolate));

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