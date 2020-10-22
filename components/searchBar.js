/* eslint-disable react/prop-types */
import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <AntDesign name="search1" size={24} color="black" />
      <TextInput
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        placeholder="search"
        style={styles.inputStyle}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#F0EEEE",
    marginHorizontal: 15,
    height: 50,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  inputStyle: {
    flex: 1,
    paddingVertical: 10,
  },
});
