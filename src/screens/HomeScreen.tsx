import React, {useEffect} from "react";
import {Text, View} from "react-native";
import movieDB from "../api/movieDB";

export const HomeScreen = () => {
  useEffect(() => {
    (async () => {
      const {data} = await movieDB.get("/now_playing");
      console.log(JSON.stringify(data.results[0], null, 3));
    })();
  }, []);

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};
