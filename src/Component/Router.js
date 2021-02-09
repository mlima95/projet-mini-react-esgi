import {ReactDom} from "../modules/ReactDom.js";

var routes = {};
var routesHistory = {};

export default function route(path, templateId, content) {
    routes[path] = {templateId: templateId, content: content};
}

function routerHistory(templateId, content) {
    console.log(templateId)
    console.log(content)
    return content
}

function router() {
    const main = document.getElementById('root');
    var url = location.hash.slice(1) || '/';
    var routeUrl = routes[url];
    if (routeUrl.content !== null) {
        // main.nextElementSibling.remove()
        ReactDom.render(main, routerHistory(routeUrl.templateId, routeUrl.content))
    }
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);