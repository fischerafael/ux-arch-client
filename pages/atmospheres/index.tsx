import { GetStaticProps } from 'next'
import { IProject, project } from '../../src/services/url/projects'

import { Atmospheres } from '../../src/UI/Pages/Atmospheres'

const atmospheres = ({ projects }: { projects: IProject[] }) => {
    return <Atmospheres projects={projects} />
}

export default atmospheres

export const getStaticProps: GetStaticProps = async (context) => {
    const projects = await project.find()

    const SECONDS = 60
    const MINUTES = 1
    const REVALIDATE = SECONDS * MINUTES

    return {
        props: {
            projects
        },
        revalidate: REVALIDATE
    }
}
