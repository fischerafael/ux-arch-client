import React from 'react'

import { DisplayImage } from '../../../../design/components/display'
import { LayoutFlex } from '../../../../design/components/layout'
import { TextParagraph, TextSubTitle } from '../../../../design/components/text'
import { Theme } from '../../../../design/theme'
import { CustomLink } from '../../../../components/CustomLink'

interface Props {
    cardIcon: string
    cardTitle: string
    cardDescription: string
    cardUrl?: string
}

export const NavCard = ({
    cardIcon,
    cardTitle,
    cardDescription,
    cardUrl
}: Props) => {
    return (
        <CustomLink href={cardUrl}>
            <LayoutFlex
                style={{
                    background: `${Theme.colors.constrastSecondary}`,
                    width: '100%',
                    padding: '2rem',
                    gap: '1rem',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    cursor: 'pointer',
                    minHeight: '12rem'
                }}
            >
                <DisplayImage src={cardIcon} alt="evaluate" />
                <TextSubTitle style={{ fontWeight: 'bold' }}>
                    {cardTitle}
                </TextSubTitle>
                <TextParagraph style={{ fontSize: '0.5rem' }}>
                    {cardDescription}
                </TextParagraph>
            </LayoutFlex>
        </CustomLink>
    )
}
