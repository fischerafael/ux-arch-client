import styled, { css } from 'styled-components'

interface Props {
    columns?: '2'
}

export const ResponsiveGrid = styled.div<Props>`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    ${(props) => props.columns === '2' && TwoColumnGrid};
    gap: 2rem;

    width: 100%;
    height: 100%;
`

const TwoColumnGrid = css`
    grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
`
