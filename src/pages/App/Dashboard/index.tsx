import React, { useState } from 'react'
import { IProjects } from '../../../entities/Projects'

import { SideBar } from './SideBar'
import { MainScreen } from './MainScreen'
import { LayoutGridDashboard } from '../../../design/components/layout'

interface Props {
    referenceProjects: IProjects
}

export const DashboardPage = ({ referenceProjects }: Props) => {
    console.log('REFERENCE PROJECTS', referenceProjects)
    const [dashboardScreen, setDashboardScreen] = useState('main')

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
        </LayoutGridDashboard>
    )
}
