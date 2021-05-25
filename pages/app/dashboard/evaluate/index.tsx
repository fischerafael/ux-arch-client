import React from 'react'
import { GetServerSideProps } from 'next'
import { PageDashboardEvaluate } from '../../../../src/pages/PageDashboardEvaluate'

const index = () => {
    return <PageDashboardEvaluate />
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
