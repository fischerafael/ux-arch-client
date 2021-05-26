import React, { useEffect, useState } from 'react'
import Router from 'next/router'
import { useCredentials } from '../../context/CredentialsContext'
import { api } from '../../services/config/api'

import { LayoutFlex } from '../../design/components/layout'
import {
    AnchorText,
    TextLabel,
    TextParagraph,
    TextSubTitle
} from '../../design/components/text'
import { InputText } from '../../design/components/input'
import { ButtonDefault } from '../../design/components/button'
import { Theme } from '../../design/theme'
import { TemplateAppLoginRegisterSection } from '../../design/components/templates'

export const AppLoginRegisterPage = () => {
    // UI STATE
    const [appPage, setAppPage] = useState('login')

    const handleSwitchPage = () => {
        if (appPage === 'register') setAppPage('login')
        if (appPage === 'login') setAppPage('register')
    }

    useEffect(() => {
        const { query } = Router
        if (query.state) {
            const pageState = query.state as string

            console.log('PAGE STATE', pageState)
            setAppPage(pageState)
        }
    }, [])

    // CREDENTIALS STATE
    const { credentials, setCredentials } = useCredentials()

    console.log('CREDENTIALS', credentials)

    // LOGIN STATE
    const [loginIdentifier, setLoginIdentifier] = useState('')
    const [loginPassword, setLoginPassword] = useState('')

    const loginData = {
        identifier: loginIdentifier,
        password: loginPassword
    }

    const [isLoginDataValid, setLoginDataValid] = useState(false)

    useEffect(() => {
        if (loginData.identifier.length < 6 || loginData.password.length < 6)
            return setLoginDataValid(false)
        setLoginDataValid(true)
    }, [loginData])

    const handleLogin = async (e: any) => {
        e.preventDefault()
        setAppPage('loading')
        try {
            const { data } = await api.post('/auth/local', loginData)
            setCredentials({
                email: data.user.email,
                id: data.user.id,
                status: data.user.status,
                username: data.user.username,
                jwt: data.jwt,
                name: data.user.name
            })
            Router.push('/app/dashboard')
        } catch (error) {
            console.log('LOGIN ERROR', error)
        } finally {
            setAppPage('login')
            setLoginIdentifier('')
            setLoginPassword('')
        }
    }

    // REGISTER STATE
    const [registerName, setRegisterName] = useState('')
    const [registerUsername, setRegisterUsername] = useState('')
    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')

    const registerData = {
        name: registerName,
        username: registerUsername,
        email: registerEmail,
        password: registerPassword
    }

    const [isRegisterDataValid, setRegisterDataValid] = useState(false)

    useEffect(() => {
        if (
            registerData.name.length < 6 ||
            registerData.username.length < 6 ||
            registerData.email.length < 6 ||
            registerData.password.length < 6
        )
            return setRegisterDataValid(false)
        setRegisterDataValid(true)
    }, [registerData])
    // console.log('REGISTER DATA', registerData)

    const handleRegister = async (e: any) => {
        e.preventDefault()
        setAppPage('loading')
        try {
            const { data } = await api.post(
                '/auth/local/register',
                registerData
            )
            setCredentials({
                email: data.user.email,
                id: data.user.id,
                status: data.user.status,
                username: data.user.username,
                jwt: data.jwt,
                name: data.user.name
            })
            Router.push('/app/dashboard')
        } catch (error) {
            console.log('LOGIN ERROR', error)
        } finally {
            setAppPage('login')
            setRegisterName('')
            setRegisterUsername('')
            setRegisterEmail('')
            setRegisterPassword('')
        }
    }

    if (appPage === 'login')
        return (
            <TemplateAppLoginRegisterSection as="main">
                <LayoutFlex
                    as="section"
                    style={{
                        flexDirection: 'column',
                        gap: '1rem',
                        padding: '1rem'
                    }}
                >
                    <LayoutFlex
                        as="img"
                        src="/assets/logo-dark.svg"
                        alt="Logo Dark"
                        style={{ maxWidth: '4rem' }}
                    />

                    <TextSubTitle
                        style={{ width: `${Theme.width.extraSmall}` }}
                    >
                        Olá! Faça o login para continuar.
                    </TextSubTitle>

                    <LayoutFlex
                        as="form"
                        style={{
                            width: '100%',
                            flexDirection: 'column',
                            gap: '.5rem'
                        }}
                    >
                        <TextLabel>
                            Email ou Usuário
                            <InputText
                                type="text"
                                placeholder="ex: rafael@gmail.com"
                                value={loginIdentifier}
                                onChange={(e) =>
                                    setLoginIdentifier(e.target.value)
                                }
                            />
                        </TextLabel>

                        <TextLabel>
                            Senha
                            <InputText
                                type="password"
                                placeholder="Min. 6 caracteres"
                                value={loginPassword}
                                onChange={(e) =>
                                    setLoginPassword(e.target.value)
                                }
                            />
                        </TextLabel>

                        <ButtonDefault
                            disabled={isLoginDataValid ? false : true}
                            style={{ marginTop: '.5rem' }}
                            onClick={handleLogin}
                        >
                            Entrar
                        </ButtonDefault>

                        <LayoutFlex
                            style={{
                                width: '100%',
                                gap: '.25rem',
                                marginTop: '1rem'
                            }}
                        >
                            <TextParagraph>Novo no Ux Arch?</TextParagraph>
                            <AnchorText onClick={handleSwitchPage}>
                                Cadastre-se
                            </AnchorText>
                        </LayoutFlex>
                    </LayoutFlex>
                </LayoutFlex>
            </TemplateAppLoginRegisterSection>
        )

    if (appPage === 'register')
        return (
            <TemplateAppLoginRegisterSection as="main">
                <LayoutFlex
                    as="section"
                    style={{
                        flexDirection: 'column',
                        gap: '1rem',
                        padding: '1rem'
                    }}
                >
                    <LayoutFlex
                        as="img"
                        src="/assets/logo-dark.svg"
                        alt="Logo Dark"
                        style={{ maxWidth: '4rem' }}
                    />

                    <TextSubTitle
                        style={{ width: `${Theme.width.extraSmall}` }}
                    >
                        Olá! Antes de continuarmos, preencha os campos a seguir
                        para poder acessar o Ux Arch novamente no futuro.
                    </TextSubTitle>

                    <LayoutFlex
                        as="form"
                        style={{
                            width: '100%',
                            flexDirection: 'column',
                            gap: '.5rem'
                        }}
                    >
                        <TextLabel>
                            Nome
                            <InputText
                                type="text"
                                placeholder="ex: Rafael Fischer (min. 6 caracteres)"
                                value={registerName}
                                onChange={(e) =>
                                    setRegisterName(e.target.value)
                                }
                            />
                        </TextLabel>

                        <TextLabel>
                            Usuário
                            <InputText
                                type="text"
                                placeholder="ex: rafael (min. 6 caracteres)"
                                value={registerUsername}
                                onChange={(e) =>
                                    setRegisterUsername(e.target.value)
                                }
                            />
                        </TextLabel>

                        <TextLabel>
                            Email
                            <InputText
                                type="email"
                                placeholder="ex: rafael@gmail.com (min. 6 caracteres)"
                                value={registerEmail}
                                onChange={(e) =>
                                    setRegisterEmail(e.target.value)
                                }
                            />
                        </TextLabel>

                        <TextLabel>
                            Senha
                            <InputText
                                type="password"
                                placeholder="(min. 6 caracteres)"
                                value={registerPassword}
                                onChange={(e) =>
                                    setRegisterPassword(e.target.value)
                                }
                            />
                        </TextLabel>

                        <ButtonDefault
                            disabled={isRegisterDataValid ? false : true}
                            style={{ marginTop: '.5rem' }}
                            onClick={handleRegister}
                        >
                            Finalizar
                        </ButtonDefault>

                        <LayoutFlex
                            style={{
                                width: '100%',
                                gap: '.25rem',
                                marginTop: '1rem'
                            }}
                        >
                            <TextParagraph>Já é cadastrado?</TextParagraph>
                            <AnchorText onClick={handleSwitchPage}>
                                Entre
                            </AnchorText>
                        </LayoutFlex>
                    </LayoutFlex>
                </LayoutFlex>
            </TemplateAppLoginRegisterSection>
        )

    if (appPage === 'loading')
        return (
            <TemplateAppLoginRegisterSection as="main">
                <LayoutFlex>Carregando...</LayoutFlex>
            </TemplateAppLoginRegisterSection>
        )
}
