import React from 'react'
import { LayoutFlex } from '../../../design/components/layout'
import { TextSubTitle } from '../../../design/components/text'
import { Theme } from '../../../design/theme'

export const DashboardMainScreen = () => {
    return (
        <LayoutFlex
            as="main"
            style={{
                height: '80vh',
                alignItems: 'flex-start',
                padding: '1rem'
            }}
        >
            <LayoutFlex
                as="section"
                style={{
                    height: '100%',
                    maxWidth: `${Theme.width.large}`,
                    width: '100%',
                    flexDirection: 'column',
                    background: 'red',
                    alignItems: 'flex-start',
                    overflowY: 'scroll'
                }}
            >
                <TextSubTitle
                    style={{
                        padding: '1rem 0',
                        letterSpacing: '.1rem'
                    }}
                >
                    AJUDAR O UX ARCH
                </TextSubTitle>
                <TextSubTitle
                    style={{
                        padding: '1rem 0',
                        letterSpacing: '.1rem'
                    }}
                >
                    AJUDAR O UX ARCH
                </TextSubTitle>
                <TextSubTitle
                    style={{
                        padding: '1rem 0',
                        letterSpacing: '.1rem'
                    }}
                >
                    AJUDAR O UX ARCH
                </TextSubTitle>
                <TextSubTitle
                    style={{
                        padding: '1rem 0',
                        letterSpacing: '.1rem'
                    }}
                >
                    AJUDAR O UX ARCH
                </TextSubTitle>
                <TextSubTitle
                    style={{
                        padding: '1rem 0',
                        letterSpacing: '.1rem'
                    }}
                >
                    AJUDAR O UX ARCH
                </TextSubTitle>
                <TextSubTitle
                    style={{
                        padding: '1rem 0',
                        letterSpacing: '.1rem'
                    }}
                >
                    AJUDAR O UX ARCH
                </TextSubTitle>
                <TextSubTitle
                    style={{
                        padding: '1rem 0',
                        letterSpacing: '.1rem'
                    }}
                >
                    AJUDAR O UX ARCH
                </TextSubTitle>
                <TextSubTitle
                    style={{
                        padding: '1rem 0',
                        letterSpacing: '.1rem'
                    }}
                >
                    AJUDAR O UX ARCH
                </TextSubTitle>
                <TextSubTitle
                    style={{
                        padding: '1rem 0',
                        letterSpacing: '.1rem'
                    }}
                >
                    AJUDAR O UX ARCH
                </TextSubTitle>
                <TextSubTitle
                    style={{
                        padding: '1rem 0',
                        letterSpacing: '.1rem'
                    }}
                >
                    AJUDAR O UX ARCH
                </TextSubTitle>
            </LayoutFlex>
        </LayoutFlex>
    )
}
