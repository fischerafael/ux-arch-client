import { createContext, useContext, useEffect, useState } from 'react'
import Cookie from 'js-cookie'

import { ICredentials } from '../../entities/Credentials'

interface IProps {
    credentials: ICredentials
    setCredentials: (e: ICredentials) => void
}

const CredentialsContext = createContext({} as IProps)

export const CredentialsProvider = ({ children }) => {
    const [credentials, setCredentials] = useState({} as ICredentials)

    useEffect(() => {
        Cookie.set('credentials', credentials)
    }, [credentials])

    return (
        <CredentialsContext.Provider value={{ credentials, setCredentials }}>
            {children}
        </CredentialsContext.Provider>
    )
}

export const useCredentials = () => {
    const { credentials, setCredentials } = useContext(CredentialsContext)

    return { credentials, setCredentials }
}
