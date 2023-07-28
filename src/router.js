export class Router {
  routes = {};

  add(routeName, page) {
    this.routes[routeName] = page;
  }

  route(event) {
    event = event || window.event
    event.preventDefault();
  
    const href = event.currentTarget.href;
    const url = new URL(href);
    const routePath = url.pathname;
  
    window.history.pushState({}, "", routePath)
  
    this.handle();
  }

  handle() {
    const { pathname } = window.location;
    const route = this.routes[pathname] || this.routes[404];
    fetch(route).then(data => data.text()).then(html => {
      document.querySelector("#app").innerHTML = html;
    })
  }
}