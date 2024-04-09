import { View, Text } from "react-native"
import * as S from "./styles"
import { Feather } from '@expo/vector-icons';

import Header from "../../Components/Header";
export default function MyTabBar({ state, descriptors, navigation, position }) {
    return (
    <View style={{ flexDirection: 'column' }}>
        <Header/>
        <View style={{ flexDirection: 'row', height: 44 }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
  
          return (
            <S.Button
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              activeOpacity={0.9}
              disabled={state.index === index}
              key={index}
            >
              <S.Title disabled={state.index === index} key={index}>
                {label}
              </S.Title>
            </S.Button>
          );
        })}
        </View>
    </View>
    
    );
}