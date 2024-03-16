import * as S from  "./styles";
import { AntDesign } from '@expo/vector-icons';

export default function Header(){
    return(
        <S.View>
            <S.Content style={{ backgroundColor: 'yellow' }}>
                <S.Title>MOVIES</S.Title>
                <AntDesign name="closecircleo" size={16} color="white" />
            </S.Content>
        </S.View>
    )
}