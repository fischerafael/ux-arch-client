import React from 'react'
import styled from 'styled-components'
import { LayoutFlex } from '../../../../design/components/layout'
import { TextParagraph } from '../../../../design/components/text'
import { Theme } from '../../../../design/theme'
import { IEvaluationOptions } from '../../../../entities/Evaluation'

interface Props {
    option: IEvaluationOptions
    onClick: (e: any) => any
    [x: string]: any
}

export const EvaluationOptions = ({ option, onClick, ...rest }: Props) => {
    return (
        <LayoutFlexEvaluationOptions
            style={{
                padding: '1rem'
            }}
            onClick={onClick}
            {...rest}
        >
            <LayoutFlex
                style={{
                    width: '100%',
                    justifyContent: 'flex-start',
                    gap: '1rem'
                }}
            >
                <TextParagraph>{option.emoji}</TextParagraph>
                <LayoutFlex
                    style={{
                        width: '100%',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: '0.5rem'
                    }}
                >
                    <TextParagraph
                        style={{
                            fontWeight: 'bold',
                            fontSize: '.65rem',
                            lineHeight: '1'
                        }}
                    >
                        {option.title}
                    </TextParagraph>
                    <LayoutFlex>
                        <TextParagraph
                            style={{ fontSize: '.4rem', lineHeight: '1' }}
                        >
                            {option.hashtags}
                        </TextParagraph>
                    </LayoutFlex>
                </LayoutFlex>
            </LayoutFlex>
        </LayoutFlexEvaluationOptions>
    )
}

const LayoutFlexEvaluationOptions = styled(LayoutFlex)`
    background: ${(props) => props.theme.colors.constrastSecondary};
    cursor: pointer;
    &:hover {
        background: ${(props) => props.theme.colors.contrast};
    }
`
