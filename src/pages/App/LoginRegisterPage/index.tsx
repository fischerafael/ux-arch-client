import React, { useState } from 'react'
import Router from 'next/router'

import { api } from '../../../services/config/api'
import { useCredentials } from '../../../context/CredentialsContext'

import { InputText } from '../../../design/components/input'
import { LayoutFlex } from '../../../design/components/layout'
import {
    AnchorText,
    TextLabel,
    TextParagraph,
    TextSubTitle
} from '../../../design/components/text'
import { ButtonDefault } from '../../../design/components/button'

export const LoginRegisterPage = () => {
    // UI STATE
    const [appPage, setAppPage] =
        useState<'login' | 'register' | 'loading'>('login')

    const handleSwitchPage = () => {
        if (appPage === 'register') setAppPage('login')
        if (appPage === 'login') setAppPage('register')
    }

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
                jwt: data.jwt
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
                jwt: data.jwt
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

    return (
        <LayoutFlex as="main" style={{ width: '100%', minHeight: '100vh' }}>
            {appPage === 'login' && (
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

                    <TextSubTitle>
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
            )}

            {appPage === 'register' && (
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

                    <TextSubTitle>
                        Olá! Cadastre-se para continuar.
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
                                placeholder="ex: Rafael Fischer"
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
                                placeholder="ex: rafael"
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
                                placeholder="ex: rafael@gmail.com"
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
                                placeholder="Min. 6 caracteres"
                                value={registerPassword}
                                onChange={(e) =>
                                    setRegisterPassword(e.target.value)
                                }
                            />
                        </TextLabel>

                        <ButtonDefault
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
            )}

            {appPage === 'loading' && <LayoutFlex>Carregando...</LayoutFlex>}
        </LayoutFlex>
    )
}
