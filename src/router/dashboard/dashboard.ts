
import Dashboard from "@/views/dashboard/index.vue"
import Sponsors from "@/views/dashboard/tab/sponsors/index.vue"

export const dashboardRoutes = [
    {
        path: "/",
        redirect: "/dashboard",
        name: "Home",
        children: [
            {
                name: "Dashboard",
                component: Dashboard,
                path: "/dashboard",
                meta: {
                    layout: "DashboardLayout"
                }
            },
            {
                name: "Sponsors",
                component: Sponsors,
                path: "/sponsors",
                meta: {
                    layout: "DashboardLayout"
                }
            }
        ],
        meta: {
            layout: "DashboardLayout"
        }

    }
]