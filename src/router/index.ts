


import { createRouter, createWebHistory } from "vue-router"
import { getAuthToken } from "@/utils/auth-handler"


import { authRoutes } from "./auth/login"
import { dashboardRoutes } from "./dashboard/dashboard"
const routes = [
    ...dashboardRoutes,
    ...authRoutes,
]





const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {
            top: 0,
            behavior: "smooth"
        }
    },
})


router.beforeEach(async (to, from, next) => {

    const loggedIn = !!getAuthToken();

    const isPublic = to.matched.some(record => record.meta.public);

    const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut);

    if (!isPublic && !loggedIn && to.path !== '/login') {
        return next({
            path: '/login',
            query: { redirect: to.fullPath }
        })
    }



    if (loggedIn && onlyWhenLoggedOut) {
        return next('/');
    }


    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, 100);


    next();
})

export default router