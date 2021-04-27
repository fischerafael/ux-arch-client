import { FormTextInput } from '../../../../Components/Input/FormTextInput'
import { DoubleLine } from '../../../../Components/Text/DoubleLine'
import { Paragraph } from '../../../../design-system/components/display/Text'
import { DefaultButton } from '../../../../design-system/components/input'
import { FlexContainer } from '../../../../design-system/components/layout/FlexContainer'

export const UserPersonalData = () => {
    return (
        <FlexContainer
            style={{
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center'
            }}
        >
            <DoubleLine firstLine="Olá" secondLine="Seja bem-vindo!" />
            <br />
            <Paragraph style={{}}>
                Antes de começarmos, informe seu nome, email e uma senha para
                poder acessar o UX Arch novamente no futuro.
            </Paragraph>
            <br />
            <Paragraph style={{ marginBottom: '1rem' }}>
                Prometo que só levará alguns segundos!
            </Paragraph>

            <FormTextInput
                id="name"
                value=""
                handleChange={() => {}}
                label="Nome"
                placeholder="Ex: Rafael Fischer"
            />
            <FormTextInput
                id="email"
                value=""
                handleChange={() => {}}
                label="Email"
                placeholder="Ex: rafael@gmail.com"
            />
            <FormTextInput
                id="password"
                value=""
                handleChange={() => {}}
                label="Senha"
                type="password"
                error="6 caracteres no mínimo"
            />
        </FlexContainer>
    )
}
