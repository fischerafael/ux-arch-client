import { createContext, useContext, useState } from 'react'

interface Props {
    isMobileOpen: boolean
    handleOpenMobileMenu: () => void
    handleCloseMobileMenu: () => void
}

const MobileMenuContext = createContext({} as Props)

export const MobileMenuProvider = ({ children }) => {
    const [isMobileOpen, setMobileOpen] = useState(false)

    const handleOpenMobileMenu = () => {
        setMobileOpen(true)
    }

    const handleCloseMobileMenu = () => {
        setMobileOpen(false)
    }

    const value = {
        isMobileOpen,
        handleCloseMobileMenu,
        handleOpenMobileMenu
    }

    return (
        <MobileMenuContext.Provider value={value}>
            {children}
        </MobileMenuContext.Provider>
    )
}

export const useMobileMenu = () => {
    const { isMobileOpen, handleCloseMobileMenu, handleOpenMobileMenu } =
        useContext(MobileMenuContext)

    return { isMobileOpen, handleCloseMobileMenu, handleOpenMobileMenu }
}
