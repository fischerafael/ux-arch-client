import React from 'react'

import { LayoutGridDashboard } from '../../../../design/components/layout'

import { SideBar } from '../../../../components/Dashboard/SideBar'
import { EvaluateScreen } from '../../../../components/Dashboard/Screens/EvaluateScreen'

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
            <EvaluateScreen />
        </LayoutGridDashboard>
    )
}
