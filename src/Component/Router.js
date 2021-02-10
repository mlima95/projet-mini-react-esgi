import {ReactDom} from "../modules/ReactDom.js";

var routes = {};
var routesHistory = {};

export default function route(path, screen) {
    routes[path] = {screen: screen};
    //console.log(routes)
}

function routerHistory(screen) {
    //console.log(screen)
    return screen
}

function router() {
    const main = document.getElementById('root');
    
    var url = location.hash.slice(1) || '/';
    var routeUrl = routes[url];
    console.log(routeUrl)
    if (routeUrl.content !== null) {
        // main.nextElementSibling.remove()
        ReactDom.render(main, routerHistory(routeUrl.screen))
    }
}

function routerChange() {
    main.removeChild(main.firstChild)
    router();
}

window.addEventListener('hashchange', routerChange);
window.addEventListener('load', router);