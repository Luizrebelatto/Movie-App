import { Wrapper, InputField } from "./styles";
import { AntDesign } from '@expo/vector-icons';

interface Props {
    placeholder: string
}

export default function Input({ placeholder }: Props){
    return(
        <Wrapper>
            <AntDesign name="closecircleo" size={23} color="white" />
            <InputField 
                maxLength={30}
                placeholder={placeholder}
                placeholderTextColor="white"
            />
            <AntDesign name="closecircleo" size={23} color="white" />
        </Wrapper>
    )
}