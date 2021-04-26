import React from 'react'

import { NavBar } from '../../Components/NavBar'
import { AtmospheresBody } from './Body'
import { AtmospheresHeader } from './Header'

export const Atmospheres = () => {
    return (
        <>
            <NavBar />
            <AtmospheresHeader />
            <AtmospheresBody />
        </>
    )
}
