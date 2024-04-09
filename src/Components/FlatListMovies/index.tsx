import { Image, WrapperImage } from  "./styles";
import { FlatList } from "react-native";

export default function FlatListMovies(){

    const DATA = [
        { id: '1', title: 'Item 1' },
        { id: '2', title: 'Item 2' },
        { id: '3', title: 'Item 3' },
        { id: '4', title: 'Item 4' },
        { id: '5', title: 'Item 1' },
        { id: '6', title: 'Item 2' },
        { id: '7', title: 'Item 3' },
        { id: '8', title: 'Item 4' },
        { id: '9', title: 'Item 1' },
        { id: '10', title: 'Item 2' },
        { id: '11', title: 'Item 3' },
        { id: '12', title: 'Item 4' },
    ];

    const renderItem = ({ item }) => (
        <WrapperImage>
            <Image key={item?.id}/>
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