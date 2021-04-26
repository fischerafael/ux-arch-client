import React from 'react'
import { width } from '../../../design-system/styles/Theme'

import { ResponsiveGrid } from '../../../design-system/components/layout/GridContainer/ResponsiveGridContainer'
import { FlexContainer } from '../../../design-system/components/layout/FlexContainer'
import { ProjectCard } from '../../../Components/ProjectCard'

export const AtmospheresBody = () => {
    return (
        <FlexContainer
            as="main"
            style={{
                padding: '1rem'
            }}
        >
            <ResponsiveGrid as="section" style={{ maxWidth: `${width.lg}` }}>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />

                <ProjectCard />
                <ProjectCard />
            </ResponsiveGrid>
        </FlexContainer>
    )
}
