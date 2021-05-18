import styled from 'styled-components'

export const LayoutFlex = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const LayoutGridDashboard = styled.section`
    display: grid;
    grid-template-columns: 15rem 1fr;
    gap: 1rem;
`

export const LayoutGridResponsive = styled.section`
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
    gap: 1rem;
    width: 100%;
`
