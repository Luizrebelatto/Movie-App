import * as S from  "./styles";
import { Entypo } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default function Header(){
    return(
        <S.View>
            <S.Content statusBarHeight={getStatusBarHeight()}>
                <S.Title>Movies</S.Title>
                <S.ButtonMenu>
                    <Entypo name="menu" size={20} color="white" />
                </S.ButtonMenu>
            </S.Content>
        </S.View>
    )
}