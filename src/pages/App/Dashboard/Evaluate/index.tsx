import React from 'react'

import { LayoutGridDashboard } from '../../../../design/components/layout'

import { SideBar } from '../../../../components/Dashboard/SideBar'
import { ReferencesScreen } from '../../../../components/Dashboard/Screens/ReferencesScreen'

export const EvaluatePage = () => {
    return (
        <LayoutGridDashboard
            as="main"
            style={{
                width: '100vw',
                height: '100vh'
            }}
        >
            <SideBar />
            <ReferencesScreen />
        </LayoutGridDashboard>
    )
}
