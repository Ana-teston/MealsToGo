import React from "react";
import { Searchbar } from "react-native-paper";
import { View, SafeAreaView, StatusBar, FlatList } from "react-native";
import { RestaurantInfo } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    }
})``;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantList
        data={[{name: 1}, {name: 2}, {name: 3}, {name: 4}, {name: 5}]}
        renderItem={() => <RestaurantInfo />}
        keyExtractor={(item) => item.name}
    />
  </SafeArea>
);
