import React from 'react'

import { DoubleLine } from '../../../../Components/Text/DoubleLine'
import { Paragraph } from '../../../../design-system/components/display/Text'
import { FlexContainer } from '../../../../design-system/components/layout/FlexContainer'

interface Props {
    firstLine: string
    secondLine: string
    description: string[]
}

export const DescriptiveStep = ({
    firstLine,
    secondLine,
    description
}: Props) => {
    return (
        <FlexContainer
            style={{
                flexDirection: 'column',
                alignItems: 'flex-start'
            }}
        >
            <DoubleLine firstLine={firstLine} secondLine={secondLine} />
            <br />
            {description.map((desc, index) => (
                <React.Fragment key={index}>
                    <Paragraph>{desc}</Paragraph>
                    <br />
                </React.Fragment>
            ))}
        </FlexContainer>
    )
}
