const life = [

    {
        name: "lifeRouters",
        path: "/lifeRouters",
        redirect: "/life/index"
    },
    {
        name: "index",
        path: "/life/index",
        component: () =>
            import("../../../views/life/Life")
    },
    {
        name: "simpleLife",
        path: "/life/simpleLife",
        component: () =>
            import("../../../views/life/simpleLife/SimpleLife")
    },
]
export default life;