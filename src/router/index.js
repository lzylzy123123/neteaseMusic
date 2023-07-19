import React from "react"
import Me from "@/views/me"
import Home from "@/views/home"
import Community from "@/views/community"
import Boke from "@/views/boke"
import Swim from "@/views/swim"
const routes=[
    {
        path:"/home",
        element:<Home/>
    },
    {
        path:"/boke",
        element:<Boke/>
    },
    {
        path:"/swim",
        element:<Swim/>
    },
    {
        path:"/community",
        element:<Community/>
    },
    {
        path:"/me",
        element:<Me/>
    }
]

export default routes