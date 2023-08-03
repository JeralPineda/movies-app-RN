import React from "react";
// import {useNavigation} from "@react-navigation/native";
import {Button, Text, View} from "react-native";
import {StackScreenProps} from "@react-navigation/stack";

interface Pagina1ScreenProps extends StackScreenProps<any, any> {}

export const HomeScreen = ({navigation}: Pagina1ScreenProps) => {
  // const navigation = useNavigation();

  return (
    <View>
      <Text>HomeScreen</Text>

      <Button
        title="Ir a DetailScreen"
        onPress={() => navigation.navigate("DetailScreen")}
      />
    </View>
  );
};
