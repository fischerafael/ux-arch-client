import React from 'react'
import { LayoutFlex } from '../../../../design/components/layout'
import { TextParagraph } from '../../../../design/components/text'

interface Props {
    description: string
    name: string
    location: string
    month?: string
    hour?: number
    day?: number
    temperature?: number
}

export const ProjectContext = (project: Props) => {
    return (
        <LayoutFlex
            style={{
                width: '100%',
                height: '4rem',
                background:
                    'linear-gradient(180deg, #333 0%, rgba(196, 196, 196, 0) 100%)',
                position: 'absolute',
                top: '0',
                left: '0',
                padding: '0.5rem',
                justifyContent: 'space-between',
                alignItems: 'flex-start'
            }}
        >
            <LayoutFlex
                style={{
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                }}
            >
                <TextParagraph
                    style={{
                        fontSize: '0.65rem',
                        color: 'white'
                    }}
                >
                    {project.description}
                </TextParagraph>
                <TextParagraph
                    style={{
                        fontSize: '0.5rem',
                        color: 'lightGrey'
                    }}
                >
                    {project.name}, {project.location}
                </TextParagraph>
            </LayoutFlex>

            {/* <LayoutFlex
                style={{
                    flexDirection: 'column',
                    alignItems: 'flex-end'
                }}
            >
                <TextParagraph
                    style={{
                        fontSize: '0.65rem',
                        color: 'white',
                        textAlign: 'right'
                    }}
                >
                    {project.hour}:00, 17 de outubro
                </TextParagraph>
                <TextParagraph
                    style={{
                        fontSize: '0.5rem',
                        color: 'lightGrey'
                    }}
                >
                    24 ° C
                </TextParagraph>
            </LayoutFlex> */}
        </LayoutFlex>
    )
}
