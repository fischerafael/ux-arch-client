import React from 'react'
import { GetServerSideProps } from 'next'

import { EvaluatePage } from '../../../../src/pages/App/Dashboard/Evaluate'

const index = () => {
    return <EvaluatePage />
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
