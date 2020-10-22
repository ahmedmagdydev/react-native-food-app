/* eslint-disable react/prop-types */
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const SingleResult = ({ item }) => {
  return (
    <View style={[styles.container]}>
      <Image style={styles.image} source={{ uri: item.image_url }} />
      <Text style={styles.name}>{item.name}</Text>
      <Text>
        {item.rating} Stars, {item.review_count} Reviews
      </Text>
    </View>
  );
};

export default SingleResult;

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 125,
    borderRadius: 8,
  },
  name: {
    fontWeight: "bold",
  },
});
