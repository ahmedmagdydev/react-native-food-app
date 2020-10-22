import axios from "axios";
import { env } from "../env";
export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses/",
  headers: {
    Authorization: "Bearer " + env["API Key"],
  },
});
