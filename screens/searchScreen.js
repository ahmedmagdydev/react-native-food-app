import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/searchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/resultsList";

const searchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, error] = useResults();
  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <View style={styles.background}>
      <SearchBar
        term={term}
        onTermChange={(term) => {
          setTerm(term);
        }}
        onTermSubmit={() => searchApi(term)}
      />
      {error ? <Text>{error}</Text> : null}
      <ScrollView>
        <ResultsList
          title={"Cost Effecitve"}
          data={filterResultsByPrice("$")}
        ></ResultsList>
        <ResultsList
          title={"Bit Pricer"}
          data={filterResultsByPrice("$$")}
        ></ResultsList>
        <ResultsList
          title={"Big Spender"}
          data={filterResultsByPrice("$$$")}
        ></ResultsList>
      </ScrollView>
    </View>
  );
};

export default searchScreen;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#fff",
    flex: 1,
  },
});
