
import Dashboard from "@/views/dashboard/index.vue"
import Sponsors from "@/views/dashboard/tab/sponsors/index.vue"
import Requirements from "@/views/dashboard/tab/requirements/index.vue"
export const dashboardRoutes = [
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
]