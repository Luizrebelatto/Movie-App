import { Wrapper, TitleMovie, Card, CardTitle, CardDescription, Circle, DescriptionMovie, Title, ImageMovie } from "./styles"
import { TouchableOpacity, View } from "react-native";
import ImageMarvel from "../../assets/svg/m-marvel.jpeg"
import { AntDesign } from '@expo/vector-icons';


import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useState } from "react";
import theme from "src/Global/theme";
import { useNavigation } from "@react-navigation/native";

export default function MovieDetails(){
    const insets = useSafeAreaInsets().top
    const navigation = useNavigation()

    const [isFavorite, setIsFavorite] = useState(false)

    return (
        <Wrapper bounces={false} showsVerticalScrollIndicator={false}>
            <View style={{ height: 100, width: "100%", position: "absolute", zIndex: 2, top: insets, paddingLeft: 16, paddingRight: 16, justifyContent: "space-between", flexDirection: "row"}}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ backgroundColor: '#16171B', width: 24, height: 24, borderRadius: 12, alignItems: "center", justifyContent: "center" }}
                >
                    <AntDesign name="arrowleft" size={20} color={theme.colors.white} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setIsFavorite((prev) => !prev)} 
                    style={{ backgroundColor: 'white', width: 24, height: 24, borderRadius: 12, alignItems: "center", justifyContent: "center" }}
                >
                    <AntDesign name={!isFavorite ? "hearto" : "heart"} size={14} color="black" />
                </TouchableOpacity>
            </View>
            <ImageMovie source={ImageMarvel}/>
            <View style={{ paddingLeft: 16, paddingRight: 16, paddingBottom: 20 }}>
                <TitleMovie>Missao</TitleMovie>
                <Title>Sinopse</Title>
                <DescriptionMovie>
                Em Missão Impossível 7: Acerto de Contas Parte 1, Ethan Hunt (Tom Cruise) e a equipe do IMF formada por Ilsa Faust (Rebecca Ferguson), Benji Dunn (Simon Pegg) e Luther Stickell (Ving Rhames) devem rastrear uma nova e aterrorizante arma que representa uma ameaça para toda a humanidade se cair em mãos erradas. Com o controle do futuro e o destino do mundo em jogo, a equipe parte em uma corrida mortal ao redor do planeta. Confrontado por um novo inimigo misterioso e muito perigoso, Ethan assume que nada pode importar mais do que a missão - nem mesmo sua própria vida.Verifique a classificação indicativa no Portal Online da Cultura Digital.
                </DescriptionMovie>
                <View style={{  flexWrap: "wrap", flexDirection:"row", justifyContent: "space-between"}}>
                    {[0,1,2,3].map(() => (
                        <Card>
                            <View style={{ flexDirection: "row" }}>
                                <Circle>
                                    <AntDesign name="downcircleo" size={14} color="orange" />
                                </Circle>
                                <CardTitle>LABEL</CardTitle>
                            </View>
                            <CardDescription>Text</CardDescription>
                        </Card>
                    ))}
                </View>
            </View>
        </Wrapper>
    )
}
