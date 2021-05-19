import React from 'react'
import { DisplayImage } from '../../design/components/display'
import { LayoutFlex } from '../../design/components/layout'
import { TextParagraph, TextSubTitle } from '../../design/components/text'
import { Theme } from '../../design/theme'
import { IProjects } from '../../entities/Projects'

interface Props {
    onClick: (e: any) => any
    project: IProjects
}

export const ProjectCard = ({ project, onClick }: Props) => {
    return (
        <LayoutFlex
            style={{
                background: `${Theme.colors.constrastSecondary}`,
                width: '100%',
                cursor: 'pointer',
                flexDirection: 'column'
            }}
            onClick={onClick}
        >
            <DisplayImage
                style={{
                    width: '100%',
                    height: '10rem'
                }}
                src={project.thumbnail}
            />
            <LayoutFlex
                style={{
                    background: `${Theme.colors.constrastSecondary}`,
                    width: '100%',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    padding: '1rem'
                }}
            >
                <TextSubTitle
                    style={{ fontSize: '.75rem', fontWeight: 'bold' }}
                >
                    {project.name}
                </TextSubTitle>
                <TextParagraph style={{ fontSize: '.625rem' }}>
                    {project.location}
                </TextParagraph>
            </LayoutFlex>
        </LayoutFlex>
    )
}
