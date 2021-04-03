import Home from "./pages/home";
import Login from "./pages/login";
import Users, { getServerSideData } from "./pages/users";

export default [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  { path: "/login", component: Login },
  { path: "/users", component: Users, getServerSideData },
];
