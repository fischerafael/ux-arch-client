import React from 'react'
import { DisplayImage } from '../../../../../design/components/display'
import { LayoutFlex } from '../../../../../design/components/layout'
import { TextParagraph } from '../../../../../design/components/text'
import { Theme } from '../../../../../design/theme'
import { IProjects } from '../../../../../entities/Projects'

interface Props {
    project: IProjects
}

export const ProjectEvaluation = ({ project }: Props) => {
    console.log('PROJECT TO BE EVALUATED INFO', project)

    return (
        <LayoutFlex style={{ minHeight: '100vh', width: '100%' }}>
            <LayoutFlex
                style={{
                    height: '100%',
                    width: '100%',
                    maxWidth: `${Theme.width.small}`,
                    padding: '1rem',
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                }}
            >
                <DisplayImage
                    src={project.thumbnail}
                    alt={project.name}
                    style={{ width: '100%', height: '50vh' }}
                />
                <TextParagraph style={{ padding: '1rem 0' }}>
                    Como você se sentiria DESCANSANDO nesse local?
                </TextParagraph>
                <LayoutFlex></LayoutFlex>
            </LayoutFlex>
        </LayoutFlex>
    )
}
