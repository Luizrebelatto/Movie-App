import { Image, WrapperImage } from  "./styles";
import { FlatList, Text } from "react-native";
import ImageMarvel from "../../assets/svg/m-marvel.jpeg"
import { useNavigation } from "@react-navigation/native";
import { movies } from "src/services/movies.service";
import { useEffect, useState } from "react";


export default function FlatListMovies(){

    const navigation = useNavigation()

    const [moviesAPI, setMovies] = useState([])

    const getMovies = async () => {
        try {
            const response = await movies().getMovies()
            setMovies(response.data.results)
            // console.log("LINHA 19: ", moviesAPI)
        } catch (error) {
            console.log("Error")
        }
    }

    useEffect(() => {
        getMovies()
    }, [moviesAPI])

    const renderItem = ({ item }) => (
        <WrapperImage activeOpacity={0.9} onPress={()=> navigation.navigate("movieDetails", { movieSelected: item })}>
            <Image 
                key={item?.id} 
                source={{ uri:`https://image.tmdb.org/t/p/w440_and_h660_face${item?.poster_path}` }}
            />
        </WrapperImage>
    );

    return(
        <>
            <FlatList
                bounces={false}
                renderItem={renderItem}
                data={moviesAPI}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: 32, justifyContent: 'space-around' }}
            />
        </>
    )
}