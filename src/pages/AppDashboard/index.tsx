import React from 'react'

import { DashboardMainScreen } from '../../components/App/DashboardMainScreen'
import { NavBar } from '../../components/App/NavBar'

export const DashboardPage = () => {
    return (
        <>
            <NavBar />
            <DashboardMainScreen />
        </>
    )
}
