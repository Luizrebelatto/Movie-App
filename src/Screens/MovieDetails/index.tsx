import { Wrapper, TitleMovie, Card, CardTitle, CardDescription, Circle, DescriptionMovie, Title, ImageMovie, WrapperCard } from "./styles"
import { TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';


import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useState } from "react";
import theme from "src/Global/theme";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function MovieDetails(){
    const insets = useSafeAreaInsets().top
    const navigation = useNavigation()
    const route = useRoute()

    const [isFavorite, setIsFavorite] = useState(false)

    function formattedDate(date: string) {
        const dateSplitted = date.split("-").reverse()
        return `${dateSplitted[0]}/${dateSplitted[1]}/${dateSplitted[2]}`
    }

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
            <ImageMovie source={{ uri:`https://image.tmdb.org/t/p/w440_and_h660_face${route.params.movieSelected?.poster_path}` }}/>
            <View style={{ paddingLeft: 16, paddingRight: 16, paddingBottom: 20 }}>
                <TitleMovie>{route.params.movieSelected?.title}</TitleMovie>
                <Title>Sinopse</Title>
                <DescriptionMovie>
                    {route.params.movieSelected?.overview}
                </DescriptionMovie>
                <View style={{  flexWrap: "wrap", flexDirection:"row", justifyContent: "space-between"}}>
                    
                        <Card>
                            <WrapperCard>
                                <Circle>
                                    <AntDesign name="downcircleo" size={14} color="orange" />
                                </Circle>
                                <CardTitle>Lançamento</CardTitle>
                            </WrapperCard>
                            <CardDescription>{formattedDate(route.params.movieSelected?.release_date)}</CardDescription>
                        </Card>
                        <Card>
                            <WrapperCard>
                                <Circle>
                                    <AntDesign name="downcircleo" size={14} color="orange" />
                                </Circle>
                                <CardTitle>Idioma Original</CardTitle>
                            </WrapperCard>
                            <CardDescription>{route.params.movieSelected?.original_language}</CardDescription>
                        </Card>
                        <Card>
                            <WrapperCard>
                                <Circle>
                                    <AntDesign name="downcircleo" size={14} color="orange" />
                                </Circle>
                                <CardTitle>Adulto</CardTitle>
                            </WrapperCard>
                            <CardDescription>
                                {!!route.params.movieSelected?.adult ? "Sim" : "Não"}
                            </CardDescription>
                        </Card>
                        <Card>
                            <WrapperCard>
                                <Circle>
                                    <AntDesign name="downcircleo" size={14} color="orange" />
                                </Circle>
                                <CardTitle>Popularidade</CardTitle>
                            </WrapperCard>
                            <CardDescription>{route.params.movieSelected?.popularity}</CardDescription>
                        </Card>
                   
                </View>
            </View>
        </Wrapper>
    )
}
