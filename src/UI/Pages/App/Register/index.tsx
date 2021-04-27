import React from 'react'
import { width } from '../../../design-system/styles/Theme'
import { FlexContainer } from '../../../design-system/components/layout/FlexContainer'
import { DoubleLine } from '../../../Components/Text/DoubleLine'
import { FormTextInput } from '../../../Components/Input/FormTextInput'
import {
    AnchorLink,
    DefaultButton
} from '../../../design-system/components/input'
import { ClickableLogo } from '../../../Components/ClickableLogo'
import { Paragraph } from '../../../design-system/components/display/Text'
import { CustomLink } from '../../../Components/CustomLink'

export const Register = () => {
    return (
        <FlexContainer as="main">
            <FlexContainer
                as="section"
                style={{
                    maxWidth: `${width.xs}`,
                    flexDirection: 'column',
                    minHeight: '100vh',
                    padding: '1rem',
                    alignItems: 'flex-start'
                }}
            >
                <FlexContainer>
                    <ClickableLogo />
                </FlexContainer>
                <br />
                <DoubleLine firstLine="Olá" secondLine="Seja bem-vindo!" />
                <br />
                <Paragraph style={{}}>
                    Informe seu nome, email e uma senha para poder acessar o UX
                    Arch novamente no futuro.
                </Paragraph>
                <br />
                <FormTextInput label="Nome" placeholder="Ex: Rafael Fischer" />
                <FormTextInput
                    label="Email"
                    placeholder="Ex: rafael@gmail.com"
                />
                <FormTextInput
                    label="Senha"
                    type="password"
                    error="6 caracteres no mínimo"
                />
                <br />
                <DefaultButton
                    style={{ margin: '1rem 0', alignSelf: 'flex-end' }}
                    onClick={() => {}}
                >
                    Projetar
                </DefaultButton>
                <FlexContainer style={{ marginTop: '1rem' }}>
                    <CustomLink href="/app/login">
                        <AnchorLink>Já sou cadastrado</AnchorLink>
                    </CustomLink>
                </FlexContainer>
            </FlexContainer>
        </FlexContainer>
    )
}
