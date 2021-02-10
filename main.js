import route from "./src/Component/Router.js";
import Home from "./src/Views/Home.js";
import Blog from "./src/Views/Blog.js";

route('/', Home);
route('/blog', Blog);