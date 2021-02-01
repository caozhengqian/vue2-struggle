const familyRouters = [

    {
        name: "familyRouters",
        path: "/familyRouters",
        redirect: "/family/index"
    },
    {
        name: "index",
        path: "/family/index",
        component: () =>
            import("../../../views/family/Family")
    },
    {
        name: "caowangshi",
        path: "/family/caowangshi",
        component: () =>
            import("../../../views/family/0/0/CaoWangShi/CaoWangShi")
    }
]
export default familyRouters;