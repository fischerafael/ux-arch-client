import { GetServerSideProps } from 'next'
import React from 'react'
import { ICredentials } from '../../../src/entities/Credentials'
import { IProjects } from '../../../src/entities/Projects'
import { DashboardPage } from '../../../src/pages/App/Dashboard'
import { api } from '../../../src/services/config/api'

interface Props {
    credentials: ICredentials
    referenceProjects: IProjects
}

const index = ({ credentials, referenceProjects }: Props) => {
    console.log('CREDENTIALS - GET SERVER SIDE PROPS', credentials)

    return (
        <DashboardPage
            referenceProjects={referenceProjects}
            credentials={credentials}
        />
    )
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
            credentials: parsedCredentials,
            referenceProjects: referenceProjects
        }
    }
}
