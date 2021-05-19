import React from 'react'

import { SideBar } from '../../../components/Dashboard/SideBar'
import { MainScreen } from '../../../components/Dashboard/Screens/MainScreen'
import { LayoutGridDashboard } from '../../../design/components/layout'

export const DashboardPage = () => {
    return (
        <LayoutGridDashboard
            as="main"
            style={{
                width: '100vw',
                height: '100vh'
            }}
        >
            <SideBar />
            <MainScreen />
        </LayoutGridDashboard>
    )
}
