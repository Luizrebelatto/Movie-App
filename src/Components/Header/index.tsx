import * as S from  "./styles";
import { Entypo } from '@expo/vector-icons';
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Header(){
    const insets = useSafeAreaInsets().top

    return(
        <S.View>
            <S.Content statusBarHeight={insets}>
                <S.Title>Movies</S.Title>
                <S.ButtonMenu>
                    <Entypo name="menu" size={20} color="white" />
                </S.ButtonMenu>
            </S.Content>
        </S.View>
    )
}