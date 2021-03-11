const life = [
  {
    name: "lifeRouters",
    path: "/lifeRouters",
    redirect: "/life/index"
  },
  {
    name: "index",
    path: "/life/index",
    component: () => import("../../../views/life/Life")
  },
  {
    name: "simpleLife",
    path: "/life/simpleLife",
    component: () => import("../../../views/life/simpleLife/SimpleLife")
  },
  {
    name: "dataLifeNotToSon",
    path: "/life/DataLifeNotToSon",
    component: () =>
      import("../../../views/life/DataLifeNotToSon/DataLifeNotToSon")
  },
  {
    name: "dataLifeToSon",
    path: "/life/DataLifeToSon",
    component: () => import("../../../views/life/DataLifeToSon/DataLifeToSon")
  },
  {
    name: "sonChangeFather",
    path: "/life/SonChangeFather",
    component: () =>
      import("../../../views/life/SonChangeFather/SonChangeFather")
  },
  {
    name: "routerLife",
    path: "/life/RouterLife",
    component: () => import("../../../views/life/RouterLife/RouterLife")
  },
  {
    name: "routerLifeTimeOut",
    path: "/life/RouterLifeTimeOut",
    component: () =>
      import("../../../views/life/RouterLifeTimeOut/RouterLifeTimeOut")
  },
  {
    name: "unComLife",
    path: "/life/UnComLife",
    component: () => import("../../../views/life/UnComLife/UnComLife")
  },
  {
    name: "unComLifeTimeOut",
    path: "/life/UnComLifeTimeOut",
    component: () =>
      import("../../../views/life/UnComLifeTimeOut/UnComLifeTimeOut")
  },
  {
    name: "forLife",
    path: "/life/ForLife",
    component: () => import("../../../views/life/ForLife/ForLife")
  },
  {
    name: "stopLife",
    path: "/life/StopLife",
    component: () => import("../../../views/life/StopLife/StopLife")
  },
  {
    name: "noStopLife",
    path: "/life/NoStopLife",
    component: () => import("../../../views/life/NoStopLife/NoStopLife")
  },
  {
    name: "testRouter",
    path: "/life/RouterLife/TestRouter1",
    component: () => import("../../../views/life/RouterLife/TestRouter")
  }
];
export default life;
