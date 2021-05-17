import { createContext, useContext, useState } from 'react'
import { ICredentials } from '../../entities/Credentials'

interface IProps {
    credentials: ICredentials
    setCredentials: (e: ICredentials) => void
}

const CredentialsContext = createContext({} as IProps)

export const CredentialsProvider = ({ children }) => {
    const [credentials, setCredentials] = useState({} as ICredentials)

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
