import axios from "axios";

// This API KEY is created from
//  console.developers.google.com

const KEY = "AIzaSyAs0m2cDKmcME-mXmZ2HdeGqKP3jzyh74c";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
