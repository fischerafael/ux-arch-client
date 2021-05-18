import { GetServerSideProps } from 'next'
import React from 'react'
import { ICredentials } from '../../../src/entities/Credentials'
import { DashboardPage } from '../../../src/pages/App/Dashboard'

interface Props {
    credentials: ICredentials
}

const index = ({ credentials }: Props) => {
    console.log('CREDENTIALS - GET SERVER SIDE PROPS', credentials)

    return <DashboardPage credentials={credentials} />
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

    return {
        props: {
            credentials: parsedCredentials
        }
    }
}
