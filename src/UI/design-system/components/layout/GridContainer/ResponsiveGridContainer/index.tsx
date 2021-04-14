import styled from 'styled-components'

export const ResponsiveGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    gap: 2rem;

    width: 100%;
    height: 100%;
`
