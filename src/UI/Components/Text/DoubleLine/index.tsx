import React from 'react'
import { Text } from '../../../design-system/components/display/Text'

export const DoubleLine = ({ firstLine, secondLine }) => {
    return (
        <>
            <Text
                as="h2"
                style={{
                    fontSize: '1rem',
                    lineHeight: '1rem',
                    fontWeight: 'normal'
                }}
            >
                {firstLine}
            </Text>
            <Text as="h2" style={{ fontSize: '1rem', lineHeight: '1.5rem' }}>
                {secondLine}
            </Text>
        </>
    )
}

export default DoubleLine
