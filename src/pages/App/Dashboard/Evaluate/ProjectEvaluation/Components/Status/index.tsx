import React from 'react'
import { LayoutFlex } from '../../../../../../../design/components/layout'
import { Theme } from '../../../../../../../design/theme'

export const Status = ({ current, total }) => {
    const percentage = (current / total) * 100

    return (
        <LayoutFlex
            style={{
                width: '100%',
                height: '.5rem',
                background: `${Theme.colors.constrastSecondary}`,
                position: 'relative'
            }}
        >
            <LayoutFlex
                style={{
                    height: '100%',
                    width: `${percentage}%`,
                    background: `${Theme.colors.primary}`,
                    position: 'absolute',
                    left: '0'
                }}
            />
        </LayoutFlex>
    )
}
