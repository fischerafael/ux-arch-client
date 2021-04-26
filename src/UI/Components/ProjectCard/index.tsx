import React from 'react'
import { Text } from '../../design-system/components/display/Text'
import { FlexContainer } from '../../design-system/components/layout/FlexContainer'
import { colors } from '../../design-system/styles/Theme'

export const ProjectCard = () => {
    return (
        <FlexContainer
            as="article"
            style={{
                border: `solid .05rem ${colors.grey}`,
                borderRadius: '.5rem',
                flexDirection: 'column'
            }}
        >
            <CardHeader
                title="Villa Savoye"
                imgUrl="https://teturaarqui.files.wordpress.com/2010/10/1288061919-villa-savoye-4-1000x664.jpg"
            />
            <CardBody />
        </FlexContainer>
    )
}

const CardHeader = ({ title, imgUrl }) => {
    return (
        <FlexContainer as="header">
            <FlexContainer
                as="img"
                src={imgUrl}
                alt={title}
                style={{
                    borderRadius: '0.5rem 0.5rem 0 0',
                    objectFit: 'cover'
                }}
            />
        </FlexContainer>
    )
}

const CardBody = () => {
    return (
        <FlexContainer
            as="body"
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
                Villa Savoye
            </Text>
            <Text
                as="p"
                style={{
                    textAlign: 'start',
                    fontSize: '.6rem',
                    lineHeight: '1rem'
                }}
            >
                Poissy, França
            </Text>
        </FlexContainer>
    )
}
