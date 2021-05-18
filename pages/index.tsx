import { GetServerSideProps } from 'next'
import { HomePage } from '../src/pages/HomePage'
import { api } from '../src/services/config/api'

function index() {
    return <HomePage />
}

export default index

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const { status } = await api.get('/')

    console.log('WAKE UP API CALL STATUS', status)

    return {
        props: {
            ok: 'ok'
        }
    }
}
