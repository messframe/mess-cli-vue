export default [
    {
        path: '/mess_vue',
        name: 'demo',
        component: () => import('../pages/demo.vue'),
    },
    {
        path: '/mess_vue/modulesA',
        name: 'homePage',
        component: () => import('../pages/home.vue'),
        children: [
            {
                path: '/mess_vue/modulesA/subHome',
                name: 'subHomePage',
                component: () => import('../pages/subHome.vue'),
            }
        ]
    },
    {
        path: '/mess_vue/modulesA/about',
        name: 'about',
        component: () => import('../pages/about.vue'),
    }
]