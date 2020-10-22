import { useState, useEffect } from "react";
import yelp from "../api/yelp";
export default () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    searchApi("milan");
  }, []);
  const searchApi = (searchTerm) => {
    yelp
      .get("search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      })
      .then((response) => {
        setResults(response.data.businesses);
        console.log(Date.now());
      })
      .catch(() => {
        setError("somthing went wrong");
      });
  };
  return [searchApi, results, error];
};
