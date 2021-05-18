import { createContext, useContext, useEffect, useState } from 'react'
import Cookie from 'js-cookie'
import Router from 'next/router'

import { ICredentials } from '../../entities/Credentials'

interface IProps {
    credentials: ICredentials
    setCredentials: (e: ICredentials) => void
    handleLogout: () => void
}

const CredentialsContext = createContext({} as IProps)

export const CredentialsProvider = ({ children }) => {
    const [credentials, setCredentials] = useState({} as ICredentials)

    const handleLogout = () => {
        setCredentials({
            email: '',
            id: '',
            jwt: '',
            name: '',
            status: '',
            username: ''
        })
        Router.push('/app')
    }

    useEffect(() => {
        Cookie.set('credentials', credentials)
    }, [credentials])

    return (
        <CredentialsContext.Provider
            value={{ credentials, setCredentials, handleLogout }}
        >
            {children}
        </CredentialsContext.Provider>
    )
}

export const useCredentials = () => {
    const { credentials, setCredentials, handleLogout } =
        useContext(CredentialsContext)

    return { credentials, setCredentials, handleLogout }
}
