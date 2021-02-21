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
    {
        name: "fuzisunLife",
        path: "/life/fuzisunLife",
        component: () =>
            import("../../../views/life/fuzisunLife/FuzisunLife")
    },
]
export default life;