import { useEffect } from 'react'
import { api } from '../../services/config/api'

export const useWakeUpAPI = () => {
    useEffect(() => {
        ;(async function () {
            const { status } = await api.get('/')
            console.log('WAKE UP API CALL STATUS', status)
        })()
    }, [])
}
