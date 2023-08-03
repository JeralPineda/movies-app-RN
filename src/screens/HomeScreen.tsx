import React, {useEffect} from "react";
import {Text, View} from "react-native";

import movieDB from "../api/movieDB";
import {MovieDBNowPlaying} from "../interfaces/movie";

export const HomeScreen = () => {
  useEffect(() => {
    (async () => {
      const {data} = await movieDB.get<MovieDBNowPlaying>("/now_playing");
      console.log(JSON.stringify(data.results[0].title, null, 3));
    })();
  }, []);

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};
