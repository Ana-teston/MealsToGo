import React from "react";
import { Searchbar } from "react-native-paper";
import { View, FlatList } from "react-native";
import { RestaurantInfo } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import {SafeArea} from "../../../components/utility/safe-area.component";


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
