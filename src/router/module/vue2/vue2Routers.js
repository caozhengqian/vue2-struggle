const vue2Router = [
  {
    name: "vue2Routername",
    path: "/vue2Routerpath",
    redirect: "/vue2RouterRedirect/index"
  },
  {
    name: "index",
    path: "/vue2RouterRedirect/index",
    component: () => import("../../../views/Vue2/Vue2")
  }
];
export default vue2Router;
