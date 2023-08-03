/**
 *API Now Playing
 * curl --request GET \
     --url 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1' \
     --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjkzOGI3NzY4ZjdhNzEzODdjY2RjNGNmZGMyZGE1ZiIsInN1YiI6IjY0Y2FmN2FjZTA0ZDhhMDBlMzVlYTc3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xd0EOaWVWD50fHj5LditQMcE3QFs2ew7Y3ZuLMjvyk4' \
     --header 'accept: application/json'
 */

import "react-native-gesture-handler";

import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {Navigation} from "./navigation";

const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
