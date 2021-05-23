import React from 'react'
import { GetServerSideProps } from 'next'
import { AppEvaluatePage } from '../../../../src/pages/AppEvaluate'

const index = () => {
    return <AppEvaluatePage />
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
