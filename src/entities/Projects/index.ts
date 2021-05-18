export interface IProjectUses {
    title: string
    id: string
}

export interface IEvaluations {
    id: string
    score: number
    user: string
}

export interface IProjects {
    id: string
    name: string
    location: string
    thumbnail: string
    slug: string
    project_uses: IProjectUses[]
    evaluations: IEvaluations[]
}
