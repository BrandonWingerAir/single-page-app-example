const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/", view: () => console.log("Dashboard Page") },
        { path: "/posts", view: () => console.log("Posts Page") },
        { path: "/settings", view: () => console.log("Settings Page") }
    ];

    const checkRoutes = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let currentRoute = checkRoutes.find(checkRoute => checkRoute.isMatch);

    if (!currentRoute) {
        currentRoute = {
            route: routes[0],
            isMatch: true
        };
    }

    console.log(currentRoute.route.view());
};

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});