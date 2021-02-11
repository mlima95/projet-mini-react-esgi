import route from "./src/Component/Router.js";
import Home from "./src/Views/Home.js";
import Blog from "./src/Views/Blog.js";
import Brigitte from "./src/Views/Brigitte.js";

route('/', Home);
route('/blog', Blog);
route('/maCougar',  Brigitte);