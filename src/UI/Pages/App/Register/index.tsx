import { useForm } from '../../../../hooks/useForm'
import { userServices } from '../../../../usecases/services/user'

import {
    AnchorLink,
    DefaultButton
} from '../../../design-system/components/input'
import { width } from '../../../design-system/styles/Theme'
import { FlexContainer } from '../../../design-system/components/layout/FlexContainer'

import { ClickableLogo } from '../../../Components/ClickableLogo'
import { CustomLink } from '../../../Components/CustomLink'

import { RegisterForm } from './RegisterForm'
import { useEffect, useState } from 'react'

export const Register = () => {
    const { data, handleDataChange } = useForm({
        name: '',
        username: '',
        email: '',
        password: ''
    })

    const handleRegister = async (e: any) => {
        e.preventDefault()
        try {
            const response = await userServices.create(data)
            console.log('CREATE USER RESPONSE', response)
        } catch (error) {
            alert(error.message)
            console.log('CREATE USER RESPONSE', error.message)
        }
    }

    const [isFormValid, setFormValid] = useState(false)

    useEffect(() => {
        if (
            data.name.length >= 3 &&
            data.username.length >= 3 &&
            data.email.length >= 5 &&
            data.password.length >= 6
        ) {
            setFormValid(true)
            return
        }
        setFormValid(false)
    }, [data])

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

                <RegisterForm data={data} handleChange={handleDataChange} />

                <DefaultButton
                    style={{ margin: '1rem 0', alignSelf: 'center' }}
                    onClick={handleRegister}
                    disabled={isFormValid ? false : true}
                >
                    Criar Conta
                </DefaultButton>

                <FlexContainer>
                    <CustomLink href="/app/login">
                        <AnchorLink>Já sou cadastrado</AnchorLink>
                    </CustomLink>
                </FlexContainer>
            </FlexContainer>
        </FlexContainer>
    )
}
