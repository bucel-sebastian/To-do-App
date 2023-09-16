import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './components/Header'

function Layout() {

    const location = useLocation();

  return (
    <main>
        <Header isNotIndex={location.pathname !== '/'}/>
        <div>
            <Outlet />
        </div>
    </main>
  )
}

export default Layout