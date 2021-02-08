function render(rootElement, createObject) {
    if (typeof createObject.type === 'object') {
        render(rootElement, createObject.type.display(createObject.props));
    } else {
        let myElement = document.createElement(createObject.type);
        for (const prop of Object.keys(createObject.props)) {
            for(const event of Object.values(createObject.event)){
                myElement.addEventListener(event.name, event);
            }
            myElement.setAttribute(prop.toString(), createObject.props[prop].toString())
        }

        if (typeof createObject.childElement === 'string') {
            let child = createObject.childElement.interpolate(createObject);
            let nodeText = document.createTextNode(child);

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