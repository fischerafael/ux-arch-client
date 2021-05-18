import { GetServerSideProps } from 'next'
import React from 'react'
import { ICredentials } from '../../../src/entities/Credentials'
import { IProjects } from '../../../src/entities/Projects'
import { DashboardPage } from '../../../src/pages/App/Dashboard'
import { api } from '../../../src/services/config/api'

interface Props {
    referenceProjects: IProjects
}

const index = ({ referenceProjects }: Props) => {
    return <DashboardPage referenceProjects={referenceProjects} />
}

export default index

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const { credentials } = req.cookies

    const parsedCredentials = JSON.parse(credentials)

    if (!parsedCredentials.jwt) {
        return {
            redirect: {
                destination: '/app',
                permanent: false
            }
        }
    }

    const { data: referenceProjects } = await api.get('/projects')

    return {
        props: {
            referenceProjects: referenceProjects
        }
    }
}
