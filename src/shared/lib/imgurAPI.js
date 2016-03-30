import { polyfill } from "es6-promise";
polyfill();
import Fetch from "isomorphic-fetch";
import secrets from "../secrets.js";

const rootUrl = "https://api.imgur.com/3/";

export default imgurAPI = {

    get: function(url) {

      return Fetch(rootUrl + url, {
        headers: {
          "Authorization": "Client-ID " + secrets.IMGUR.ID
        }
      })
      .then(function(response) {
        return response.json();
      })
      .then(function(data){
        return data
      });

    }

}