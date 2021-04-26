import { IProject } from '../../../services/url/projects'

import { NavBar } from '../../Components/NavBar'
import { AtmospheresBody } from './Body'
import { AtmospheresHeader } from './Header'

export const Atmospheres = ({ projects }: { projects: IProject[] }) => {
    return (
        <>
            <NavBar />
            <AtmospheresHeader />
            <AtmospheresBody projects={projects} />
        </>
    )
}
