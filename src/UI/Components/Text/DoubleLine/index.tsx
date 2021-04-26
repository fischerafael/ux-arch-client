import React from 'react'
import { Text } from '../../../design-system/components/display/Text'

const DoubleLine = ({ firstLine, secondLine }) => {
    return (
        <>
            <Text
                as="h2"
                style={{
                    fontSize: '1.5rem',
                    fontWeight: 'normal',
                    lineHeight: '2rem'
                }}
            >
                {firstLine}
            </Text>
            <Text as="h2" style={{ fontSize: '1.5rem', lineHeight: '2rem' }}>
                {secondLine}
            </Text>
        </>
    )
}

export default DoubleLine
