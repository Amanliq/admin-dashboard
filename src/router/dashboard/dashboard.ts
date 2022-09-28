
import Dashboard from "@/views/dashboard/index.vue"
import Sponsors from "@/views/dashboard/tab/sponsors/index.vue"
import Requirements from "@/views/dashboard/tab/requirements/index.vue"
export const dashboardRoutes = [
    {
        path: "/",
        redirect: "/sponsors",
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
                name: "Requirements",
                component: Requirements,
                path: "/requirements",
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