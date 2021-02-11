import {ReactDom} from "../Modules/ReactDom.js";

var routes = {};
var routesHistory = {};
const main = document.getElementById('root');

export default function route(path, screen) {
    routes[path] = {screen: screen};
    //console.log(routes)
}

function routerHistory(screen) {
    //console.log(screen)
    return screen
}

function router() {
    var url = location.hash.slice(1) || '/';
    var routeUrl = routes[url];
    if (routeUrl.content !== null) {
        // main.nextElementSibling.remove()
        ReactDom.render(main, routerHistory(routeUrl.screen))
    }
}

function routerChange() {
    while(main.firstChild)
    {
        main.removeChild(main.firstChild)
    }
    router();
}

window.addEventListener('hashchange', routerChange);
window.addEventListener('load', router);