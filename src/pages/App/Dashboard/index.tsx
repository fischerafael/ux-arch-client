import React, { useState } from 'react'

import { SideBar } from './SideBar'
import { MainScreen } from './MainScreen'
import { LayoutGridDashboard } from '../../../design/components/layout'
import { ReferencesScreen } from './ReferencesScreen'

export const DashboardPage = () => {
    const defaultScreen = 'references'

    const [dashboardScreen, setDashboardScreen] = useState(defaultScreen)

    const handleChangeDashboardScreen = (screen: string) => {
        setDashboardScreen(screen)
    }

    return (
        <LayoutGridDashboard
            as="main"
            style={{
                width: '100vw',
                height: '100vh'
            }}
        >
            <SideBar />
            {dashboardScreen === 'main' && <MainScreen />}
            {dashboardScreen === 'references' && <ReferencesScreen />}
        </LayoutGridDashboard>
    )
}
