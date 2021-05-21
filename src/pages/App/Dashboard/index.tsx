import React from 'react'

import { MainScreen } from '../../../components/Dashboard/Screens/MainScreen'
import { DashboardContainer } from '../../../components/Dashboard/Container'

export const DashboardPage = () => {
    return (
        <DashboardContainer>
            <MainScreen />
        </DashboardContainer>
    )
}
