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
    name: "testRouter",
    path: "/life/RouterLife/TestRouter1",
    component: () => import("../../../views/life/RouterLife/TestRouter")
  },
  {
    name: "routerLifeTimeOut",
    path: "/life/RouterLifeTimeOut",
    component: () =>
      import("../../../views/life/RouterLifeTimeOut/RouterLifeTimeOut")
  },
  {
    name: "testRouterTimeOut",
    path: "/life/RouterLifeTimeOut/testRouterTimeOut",
    component: () =>
      import("../../../views/life/RouterLifeTimeOut/TestRouterTimeOut")
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
    name: "vuexRouter",
    path: "/life/VuexLife",
    component: () => import("../../../views/life/VuexLife/VuexLife")
  },
  {
    name: "bigObjRouter",
    path: "/life/bigObj",
    component: () => import("../../../views/life/BigObj/BigObj")
  },
  {
    name: "nextTickRouter",
    path: "/life/nextTick",
    component: () => import("../../../views/life/NextTick/NextTick")
  }
];
export default life;
