
import Login from "@/views/auth/Login.vue"

export const authRoutes = [
    {
        path: "/login",
        component: Login,
        name: "Login",
        meta: {
            public: true,
            onlyWhenLoggedOut: true
        }
    }
]