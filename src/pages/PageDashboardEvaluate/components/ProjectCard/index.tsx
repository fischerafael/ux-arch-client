import React from 'react'
import { CustomLink } from '../../../../components/CustomLink'
import { DisplayImage } from '../../../../design/components/display'
import { LayoutFlex } from '../../../../design/components/layout'
import { TextParagraph, TextSubTitle } from '../../../../design/components/text'
import { Theme } from '../../../../design/theme'
import { IProjects } from '../../../../entities/Projects'

interface Props {
    href?: string
    project: IProjects
}

export const ProjectCard = ({ project, href }: Props) => {
    return (
        <CustomLink href={href}>
            <LayoutFlex
                style={{
                    background: `${Theme.colors.constrastSecondary}`,
                    width: '100%',
                    cursor: 'pointer',
                    flexDirection: 'column'
                }}
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
        </CustomLink>
    )
}
