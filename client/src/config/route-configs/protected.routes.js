import { lazy } from "react";

export const protectedRoutes = [
    {
        title:"Dashboard",
        path:"/dashboard",
        component: lazy(()=>import('../../pages/Dashboard.jsx'))
    },
    {
        title:"Profile",
        path:"/profile",
        component: lazy(()=>import('../../pages/Profile.jsx'))
    },
    {
        title:"Gallery",
        path:"/gallery",
        component: lazy(()=>import('../../pages/Gallery.jsx'))
    },
    {
        title:"Create Post",
        path:"/createPost",
        component: lazy(()=>import('../../pages/CreatePost.jsx'))
    },
    {
        title:"Edit Post",
        path:"/edit/:postId",
        component: lazy(()=>import('../../pages/EditPost.jsx'))
    },
    {
        key: "services",
        path: "/services",
        component: lazy(() => import("../../pages/Services.jsx")),
      },
      {
        key: "contact",
        path: "/contact",
        component: lazy(() => import("../../pages/Contact.jsx")),
      },
]