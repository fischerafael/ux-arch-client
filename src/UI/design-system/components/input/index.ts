import styled, { css } from 'styled-components'
import { colors } from '../../styles/Theme'

interface Props {
    disabled?: boolean
}

export const DefaultButton = styled.button<Props>`
    height: 100%;
    height: 2.5rem;
    ${(props) => props.disabled && DisabledButton}
`
const DisabledButton = css`
    background: ${colors.grey};
    cursor: not-allowed;
`
export const TextInput = styled.input`
    width: 100%;
    outline: none;
    padding: 0 1rem;
    height: 2.5rem;
    font-size: 0.75rem;
    border-radius: 0.25rem;
    border: none;
    background: ${colors.lightGrey};
    ::placeholder {
        color: ${colors.grey};
        font-weight: lighter;
    }
`
export const AnchorLink = styled.span`
    font-size: 0.75rem;
    color: ${colors.primary};
    text-align: center;
`
