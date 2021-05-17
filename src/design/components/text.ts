import styled from 'styled-components'

export const TextTitle = styled.h1`
    font-size: 2rem;
`
export const TextSubTitle = styled.h2`
    font-size: 1.5rem;
    line-height: 1.5rem;
    font-size: 1rem;
    font-weight: 400;
`
export const TextLabel = styled.label`
    font-size: 0.5rem;
    line-height: 1rem;
    width: 100%;
`
export const TextParagraph = styled.p`
    font-size: 0.75rem;
    line-height: 1rem;
`
export const AnchorText = styled.a`
    font-size: 0.75rem;
    line-height: 1rem;
    text-decoration: none;
    font-weight: 600;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
        color: ${(props) => props.theme.colors.primary};
    }
`
