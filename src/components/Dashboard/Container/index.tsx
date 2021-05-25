import React from 'react'
import { useMobileMenu } from '../../../context/MobileMenuContext'
import {
    LayoutFlex,
    LayoutGridDashboard
} from '../../../design/components/layout'
import { MobileMenu } from '../MobileMenu'
import { NavBar } from '../NavBar'
import { SideBar } from '../SideBar'

export const DashboardContainer = ({ children }) => {
    const { isMobileOpen } = useMobileMenu()

    return (
        <LayoutGridDashboard
            as="main"
            style={{
                width: '100vw',
                height: '100vh',
                position: 'relative'
            }}
        >
            {isMobileOpen && <MobileMenu />}
            <SideBar />
            <LayoutFlex
                style={{
                    width: '100%',
                    height: '100%',
                    flexDirection: 'column',
                    overflowY: 'scroll'
                }}
            >
                <NavBar />
                {children}
            </LayoutFlex>
        </LayoutGridDashboard>
    )
}
