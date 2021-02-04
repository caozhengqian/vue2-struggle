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
    },
    {
        name: "zhengshijun",
        path: "/family/zhengshijun",
        component: () =>
            import("../../../views/family/0/1/ZhengShiJun/ZhengShiJun")
    },
    {
        name: "caozhizu",
        path: "/family/caozhizu",
        component: () =>
            import("../../../views/family/1/0/CaoZhiZu/CaoZhiZu")
    },
    {
        name: "zhengxingcheng",
        path: "/family/zhengxingcheng",
        component: () =>
            import("../../../views/family/1/0/ZhengXingCheng/ZhengXingCheng")
    },
    {
        name: "wangpinxiang",
        path: "/family/wangpinxiang",
        component: () =>
            import("../../../views/family/1/1/WangPinXiang/WangPinXiang")
    },
    {
        name: "xiaolinmei",
        path: "/family/xiaolinmei",
        component: () =>
            import("../../../views/family/1/1/XiaoLinMei/XiaoLinMei")
    },
    {
        name: "caozhengqian",
        path: "/family/caozhengqian",
        component: () =>
            import("../../../views/family/2/CaoZhengQian/CaoZhengQian")
    },
    {
        name: "wanghualan",
        path: "/family/wanghualan",
        component: () =>
            import("../../../views/family/2/WangHuaLan/WangHuaLan")
    },
    {
        name: "caoyikai",
        path: "/family/caoyikai",
        component: () =>
            import("../../../views/family/3/0/CaoYiKai/CaoYiKai")
    },
    {
        name: "caoyijia",
        path: "/family/caoyijia",
        component: () =>
            import("../../../views/family/3/1/CaoYiJia/CaoYiJia")
    }
]
export default familyRouters;