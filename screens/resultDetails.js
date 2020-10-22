/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Image, View } from "react-native";
import yelp from "../api/yelp";
const ResultDetails = ({ navigation }) => {
  const id = navigation.getParam("id");
  const [details, setDetails] = useState({});
  const getDetails = (id) => {
    yelp
      .get(id)
      .then((response) => {
        setDetails(response.data);
      })
      .catch((err) => {
        console.log("getDetails -> err", err);
      });
  };
  useEffect(() => {
    getDetails(id);
  }, []);
  if (!details) return null;
  return (
    <View>
      <FlatList
        data={details.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

export default ResultDetails;

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 200,
  },
});
