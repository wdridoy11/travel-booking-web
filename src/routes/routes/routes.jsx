import React from 'react'

// import react router
import {createBrowserRouter} from 'react-router-dom'

// import pages
import Main from '../../layout/Main';
import Login from '../../pages/login/Login';
import Home from '../../pages/home/home/Home';
import Registration from '../../pages/registration/Registration';
import NewsDataLoad from '../../pages/news/NewsDataLoad';
import SingleNewDisplay from '../../pages/news/SingleNewDisplay';
import Destination from '../../pages/destination/Destination';

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
                path:"news",
                element:<NewsDataLoad></NewsDataLoad>,
                loader:({params})=>fetch(`http://localhost:5000/news`)
            },
            {
                path:"/news/:id",
                element:<SingleNewDisplay></SingleNewDisplay>,
                loader:({params})=>fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
               path:"destination",
               element:<Destination></Destination>
            },
            {
                path:"login",
                element:<Login></Login>
            },
            {
                path:"registration",
                element:<Registration></Registration>
            },
        ]
    }
])

export default router