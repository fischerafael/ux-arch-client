import styled from 'styled-components'
import { FlexContainer } from '../FlexContainer'

export const DefaultButton = styled(FlexContainer)``

export const OutlineButton = styled(FlexContainer)`
    background: transparent;
    border: solid 0.15rem ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.primary};
`
