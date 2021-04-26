import { API_URL } from '../url'

class Project {
    async find() {
        const data = await fetch(`${API_URL}/projects`)
        const projects = await data.json()
        return projects
    }

    async findOne(slug: string) {
        const data = await fetch(`${API_URL}/projects?slug=${slug}`)
        const project = await data.json()
        return project
    }
}

export const project = new Project()

export type IProjectUses = {
    id: string
    title: string
}

export type IProject = {
    id: string
    name: string
    location: string
    thumbnail: string
    slug: string
    project_uses: IProjectUses[]
}
