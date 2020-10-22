/* eslint-disable react/prop-types */
import React from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { withNavigation } from "react-navigation";
import SingleResult from "./singleResult";
const ResultsList = ({ title, data, navigation }) => {
  if (data.length === 0) return null;
  return (
    <View>
      <Text style={styles.title}>
        {title} {data.length}
      </Text>
      <FlatList
        horizontal
        indicatorStyle="white"
        data={data}
        keyExtractor={(data) => data.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={{ paddingVertical: 10 }}
              onPress={() => {
                navigation.navigate("Details", { id: item.id });
              }}
            >
              <SingleResult item={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default withNavigation(ResultsList);

const styles = StyleSheet.create({
  title: {
    marginHorizontal: 15,
    fontSize: 16,
    fontWeight: "bold",
  },
});
