import Home from './views/Home.js';
import Posts from './views/Posts.js';
import Post from './views/Post.js';
import About from './views/About.js';

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const regexPath = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = currentRoute => {
    const values = currentRoute.result.slice(1);
    const keys = Array.from(currentRoute.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const router = async () => {
    const routes = [
        { path: "/", view: Home },
        { path: "/posts", view: Posts },
        { path: "/posts/:id", view: Post },
        { path: "/settings", view: About }
    ];

    const checkRoutes = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(regexPath(route.path))
        };
    });

    let currentRoute = checkRoutes.find(checkRoute => checkRoute.result !== null);

    if (!currentRoute) {
        currentRoute = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    const view = new currentRoute.route.view(getParams(currentRoute));

    document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});