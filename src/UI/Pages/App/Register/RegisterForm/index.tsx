import React from 'react'

import { Paragraph } from '../../../../design-system/components/display/Text'
import { DefaultButton } from '../../../../design-system/components/input'
import { FlexContainer } from '../../../../design-system/components/layout/FlexContainer'

import { FormTextInput } from '../../../../Components/Input/FormTextInput'
import { DoubleLine } from '../../../../Components/Text/DoubleLine'

export const RegisterForm = ({ data, handleChange }) => {
    return (
        <FlexContainer
            as="form"
            style={{
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '1rem 0'
            }}
        >
            <DoubleLine firstLine="Olá" secondLine="Seja bem-vindo!" />
            <br />
            <Paragraph style={{}}>
                Informe seu nome, email e uma senha para poder acessar o UX Arch
                novamente no futuro.
            </Paragraph>
            <br />
            <FormTextInput
                label="Nome"
                placeholder="Ex: Rafael Fischer"
                id="name"
                handleChange={handleChange}
                value={data.name}
            />
            <FormTextInput
                label="Usuário"
                placeholder="Ex: rafaelfischer"
                id="username"
                handleChange={handleChange}
                value={data.username}
            />
            <FormTextInput
                label="Email"
                placeholder="Ex: rafael@gmail.com"
                id="email"
                handleChange={handleChange}
                value={data.email}
            />
            <FormTextInput
                label="Senha"
                type="password"
                error="6 caracteres no mínimo"
                id="password"
                handleChange={handleChange}
                value={data.password}
            />
        </FlexContainer>
    )
}
