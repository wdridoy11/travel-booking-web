import React from 'react'

// import react router
import {createBrowserRouter} from 'react-router-dom'

// import pages
import Main from '../../layout/Main';
import News from '../../pages/news/News';
import Login from '../../pages/login/Login';
import Home from '../../pages/home/home/Home';
import Registration from '../../pages/registration/Registration';
import SingleNewDetails from '../../pages/news/SingleNewDetails';

// create router
const router=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"login",
                element:<Login></Login>
            },
            {
                path:"registration",
                element:<Registration></Registration>
            },
            {
                path:"news",
                element:<News></News>,
                loader:({params})=>fetch(`http://localhost:5000/news`)
            },
            {
                path:"/news/:id",
                element:<SingleNewDetails></SingleNewDetails>,
                loader:({params})=>fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])

export default router