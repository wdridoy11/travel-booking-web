import React from 'react'

// import react router
import {createBrowserRouter} from 'react-router-dom'

// import pages
import Main from '../../layout/Main'
import Home from '../../pages/home/home/Home'

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
        ]
    }
])

export default router