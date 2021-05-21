import React from 'react'

import { LayoutFlexSideBar } from '../../../design/components/layout'
import { VerticalNav } from '../VerticalNav'

export const SideBar = () => {
    return (
        <LayoutFlexSideBar
            as="aside"
            style={{
                width: '100%',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2rem',
                gap: '1rem'
            }}
        >
            <VerticalNav />
        </LayoutFlexSideBar>
    )
}
