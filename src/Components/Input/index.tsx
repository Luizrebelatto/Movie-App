import { Wrapper, InputField } from "./styles";
import { AntDesign } from '@expo/vector-icons';

export default function Input(){
    return(
        <Wrapper>
            <AntDesign name="closecircleo" size={24} color="white" />
            <InputField 
                maxLength={30}
                placeholder="Usuário"
                placeholderTextColor="white"
            />
            <AntDesign name="closecircleo" size={24} color="white" />
        </Wrapper>
    )
}