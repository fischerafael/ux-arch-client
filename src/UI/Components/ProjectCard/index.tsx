import React from 'react'
import { IProject, IProjectUses } from '../../../services/url/projects'
import { colors } from '../../design-system/styles/Theme'

import { Text } from '../../design-system/components/display/Text'
import { FlexContainer } from '../../design-system/components/layout/FlexContainer'

export const ProjectCard = ({ project }: { project: IProject }) => {
    return (
        <FlexContainer
            as="article"
            style={{
                borderRadius: '.5rem',
                flexDirection: 'column',
                background: `${colors.lightGrey}`
            }}
        >
            <CardHeader title={project.name} imgUrl={project.thumbnail} />
            <CardTags projectUses={project.project_uses} />
            <CardBody name={project.name} location={project.location} />
            {/* <CardFooter /> */}
        </FlexContainer>
    )
}

const CardHeader = ({ title, imgUrl }) => {
    return (
        <FlexContainer as="section">
            <FlexContainer
                as="img"
                src={imgUrl}
                alt={title}
                style={{
                    borderRadius: '0.5rem 0.5rem 0 0',
                    height: '10rem',
                    objectFit: 'cover'
                }}
            />
        </FlexContainer>
    )
}

const CardTags = ({ projectUses }: { projectUses: IProjectUses[] }) => {
    return (
        <FlexContainer
            as="section"
            style={{
                justifyContent: 'flex-start',
                flexWrap: 'wrap',
                padding: '0 1rem',
                paddingTop: '.5rem'
            }}
        >
            {projectUses.map((projectUse) => (
                <Text
                    key={projectUse.id}
                    as="span"
                    style={{
                        padding: '.25rem',
                        background: `${colors.grey}`,
                        borderRadius: '.5rem',
                        fontSize: '.5rem',
                        margin: '.125rem',
                        marginLeft: '0',
                        color: 'white'
                    }}
                >
                    {projectUse.title}
                </Text>
            ))}
        </FlexContainer>
    )
}

const CardBody = ({ name, location }) => {
    return (
        <FlexContainer
            as="section"
            style={{
                padding: '1rem',
                alignItems: 'flex-start',
                flexDirection: 'column'
            }}
        >
            <Text
                as="h2"
                style={{
                    textAlign: 'start',
                    fontSize: '.8rem',
                    lineHeight: '1rem'
                }}
            >
                {name}
            </Text>
            <Text
                as="p"
                style={{
                    textAlign: 'start',
                    fontSize: '.6rem',
                    lineHeight: '1rem'
                }}
            >
                {location}
            </Text>
        </FlexContainer>
    )
}

const CardFooter = () => {
    return (
        <FlexContainer
            as="section"
            style={{
                padding: '1rem',
                borderTop: `solid .1rem ${colors.light}`,
                justifyContent: 'flex-end'
            }}
        >
            <Text
                as="p"
                style={{
                    textAlign: 'start',
                    fontWeight: 'bold',
                    fontSize: '.6rem',
                    cursor: 'pointer',
                    color: `${colors.primary}`
                }}
            >
                ver detalhes
            </Text>
        </FlexContainer>
    )
}
