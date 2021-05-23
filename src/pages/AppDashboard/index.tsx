import React from 'react'
import { DashboardContainer } from '../../components/Dashboard/Container'
import { MainScreen } from '../../components/Dashboard/Screens/MainScreen'

export const DashboardPage = () => {
    return (
        <DashboardContainer>
            <MainScreen />
        </DashboardContainer>
    )
}
