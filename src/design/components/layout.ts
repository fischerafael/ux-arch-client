import styled from 'styled-components'

export const LayoutFlex = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const LayoutFlexSideBar = styled(LayoutFlex)`
    max-height: 100vh;
    @media (max-width: ${(props) => props.theme.width.medium}) {
        display: none;
    }
`

export const LayoutFlexMobileNavBar = styled(LayoutFlex)`
    @media (min-width: ${(props) => props.theme.width.medium}) {
        display: none;
    }
`

export const LayoutFlexMobileMenu = styled(LayoutFlex)`
    @media (min-width: ${(props) => props.theme.width.medium}) {
        display: none;
    }
`

export const LayoutGridDashboard = styled.section`
    display: grid;
    grid-template-columns: 15rem 1fr;
    gap: 1rem;
    overflow: hidden;
    @media (max-width: ${(props) => props.theme.width.medium}) {
        grid-template-columns: 1fr;
    }
`

export const LayoutGridResponsive = styled.section`
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
    gap: 1rem;
    width: 100%;
`

export const LayoutGridAlternatives = styled.section`
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem;
    width: 100%;
`
