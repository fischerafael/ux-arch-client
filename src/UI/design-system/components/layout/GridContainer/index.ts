import styled from 'styled-components'

const GridContainer = styled.div`
    display: grid;
    gap: 1rem;
`
export const TwoColumnGrid = styled(GridContainer)`
    padding: 1rem;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }
`
