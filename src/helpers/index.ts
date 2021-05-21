import { SingletonRouter } from 'next/router'
import { IProjects } from '../entities/Projects'

export const handleCheckProjectAlreadyEvaluated = (
    project: IProjects,
    user: string
) => {
    return project.evaluations.some((ev) => ev.user === user)
}

export const handleFilterAlreadyEvaluatedProjects = (
    projects: IProjects[],
    user: string
) => {
    const filteredProjects = projects.filter((project) => {
        return handleCheckProjectAlreadyEvaluated(project, user) !== true
    })
    console.log('filtered projects from function', filteredProjects)
    return filteredProjects
}

export const handleShuffleProjects = (projects: IProjects[]) => {
    return projects.sort(() => Math.random() - 0.5)
}

export const handleNavigateTo = (url: string, router: SingletonRouter) => {
    router.push(url)
}
