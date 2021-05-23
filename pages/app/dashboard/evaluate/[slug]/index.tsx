import React from 'react'
import { GetServerSideProps } from 'next'

import { IProjects } from '../../../../../src/entities/Projects'
import { api } from '../../../../../src/services/config/api'
import { AppProjectEvaluation } from '../../../../../src/pages/AppProjectEvaluation'

interface Props {
    project: IProjects
}

const index = ({ project }: Props) => {
    return <AppProjectEvaluation project={project} />
}

export default index

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { credentials } = ctx.req.cookies

    const parsedCredentials = JSON.parse(credentials)

    if (!parsedCredentials.jwt) {
        return {
            redirect: {
                destination: '/app',
                permanent: false
            }
        }
    }

    const projectSlug = ctx.params.slug as string
    const { data } = await api.get(`/projects?slug=${projectSlug}`)
    const project = data[0] as IProjects

    if (!project) {
        return {
            redirect: {
                destination: '/app/dashboard/evaluate',
                permanent: false
            }
        }
    }

    return {
        props: {
            project: project
        }
    }
}
