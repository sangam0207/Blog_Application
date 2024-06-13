import { lazy } from "react";

export const publicRoutes = [
    
    {
        title:"Login",
        path:"/login",
        component: lazy(()=>import('../../pages/Login.jsx'))
    },
    {
        title:"Signup",
        path:"/signup",
        component: lazy(()=>import('../../pages/Signup.jsx'))
    },
    {
        title:"Forgot_Password",
        path:"/forgot-password",
        component: lazy(()=>import('../../pages/ForgetPassword.jsx'))
    }
]