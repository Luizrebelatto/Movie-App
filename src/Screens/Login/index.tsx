import { Wrapper, ButtonWithBackground, TextButton, ButtonTransparent, TextWhite } from "./styles"
import Input from "../../Components/Input"
import { View } from "react-native"

export default function Login({ navigation }){

    return (
        <Wrapper style={{ paddingTop: "50%" }}>
            <Input placeholder="Usuário"/>
            <Input placeholder="Senha"/>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <ButtonWithBackground onPress={()=> navigation.navigate("tabRoutes")}>
                    <TextButton disabled>Entrar</TextButton>
                </ButtonWithBackground>
                <ButtonTransparent>
                    <TextWhite>Esqueci a senha</TextWhite>
                </ButtonTransparent>
            </View>
        </Wrapper>
    )
}
