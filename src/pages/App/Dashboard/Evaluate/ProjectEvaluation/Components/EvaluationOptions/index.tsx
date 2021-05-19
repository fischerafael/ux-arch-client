import React from 'react'
import styled from 'styled-components'
import { LayoutFlex } from '../../../../../../../design/components/layout'
import { TextParagraph } from '../../../../../../../design/components/text'
import { IEvaluationOptions } from '../../../../../../../entities/Evaluation'

interface Props {
    option: IEvaluationOptions
    onClick: (e: any) => any
    [x: string]: any
}

export const EvaluationOptions = ({ option, onClick, ...rest }: Props) => {
    return (
        <LayoutFlexEvaluationOptions onClick={onClick} {...rest}>
            <TextParagraph>{option.emoji}</TextParagraph>
            <TextParagraph style={{ fontSize: '.5rem' }}>
                {option.title}
            </TextParagraph>
        </LayoutFlexEvaluationOptions>
    )
}

const LayoutFlexEvaluationOptions = styled(LayoutFlex)`
    flex-direction: column;
    padding: 0.5rem;
    background: ${(props) => props.theme.colors.constrastSecondary};
    cursor: pointer;
    transition: 0.5s;
    &:hover {
        background: ${(props) => props.theme.colors.contrast};
    }
`
