const familyRouters = [

    {
        name: "familyRouters",
        path: "/familyRouters",
        redirect: "/family/index"
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
export default familyRouters;