import About from "../view/About";
import Home from "../view/Home";
import Login from "../view/auth/Login";
let routes = [
  {
    path: "/",
    component: Home,
    layout: "admin",
  },
  {
    path: "/about",
    component: About,
    layout: "admin",
  },
  {
    path: "/login",
    component: Login,
    layout: "auth",
  },
];
export default routes;
