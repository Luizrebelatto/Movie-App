import { Image, WrapperImage } from  "./styles";
import { FlatList } from "react-native";
import ImageMarvel from "../../assets/svg/m-marvel.jpeg"
import { useNavigation } from "@react-navigation/native";

export default function FlatListMovies(){

    const navigation = useNavigation()

    const DATA = [
        { id: '1', title: 'Item 1' },
        { id: '2', title: 'Item 2' },
        { id: '3', title: 'Item 3' },
        { id: '4', title: 'Item 4' },
        { id: '5', title: 'Item 1' },
        { id: '6', title: 'Item 2' },
    ];

    const renderItem = ({ item }) => (
        <WrapperImage activeOpacity={0.9} onPress={()=> navigation.navigate("movieDetails")}>
            <Image key={item?.id} source={ImageMarvel}/>
        </WrapperImage>
    );

    return(
        <>
            <FlatList
                bounces={false}
                renderItem={renderItem}
                data={DATA}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: 32, justifyContent: 'space-around' }}
            />
        </>
    )
}