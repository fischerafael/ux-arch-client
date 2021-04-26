import { IProject } from '../../../../services/url/projects'
import { width } from '../../../design-system/styles/Theme'

import { ResponsiveGrid } from '../../../design-system/components/layout/GridContainer/ResponsiveGridContainer'
import { FlexContainer } from '../../../design-system/components/layout/FlexContainer'
import { ProjectCard } from '../../../Components/ProjectCard'

export const AtmospheresBody = ({ projects }: { projects: IProject[] }) => {
    return (
        <FlexContainer
            as="main"
            style={{
                padding: '1rem'
            }}
        >
            <ResponsiveGrid as="section" style={{ maxWidth: `${width.lg}` }}>
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </ResponsiveGrid>
        </FlexContainer>
    )
}
