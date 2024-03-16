import { Wrapper, ButtonWithBackground, TextButton, ButtonTransparent, TextWhite } from "./styles"
import Input from "../../Components/Input"
import { View } from "react-native"

export default function Favorites(){
    return (
        <Wrapper style={{ paddingTop: "50%" }}>
            <Input/>
            <Input/>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <ButtonWithBackground disabled>
                    <TextButton disabled>Tela Favoritos</TextButton>
                </ButtonWithBackground>
                <ButtonTransparent>
                    <TextWhite>Esqueci a senha</TextWhite>
                </ButtonTransparent>
            </View>
        </Wrapper>
    )
}
