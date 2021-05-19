import { GetServerSideProps } from 'next'
import React from 'react'

import { DashboardPage } from '../../../src/pages/App/Dashboard'

const index = () => {
    return <DashboardPage />
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
        props: {}
    }
}
