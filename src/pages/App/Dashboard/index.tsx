import React from 'react'
import { ICredentials } from '../../../entities/Credentials'

interface Props {
    credentials: ICredentials
}

export const DashboardPage = ({ credentials }: Props) => {
    return <div>oi: {credentials.username}</div>
}
