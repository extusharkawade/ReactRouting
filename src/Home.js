import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Header from './Components/Header'

function Home() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default Home