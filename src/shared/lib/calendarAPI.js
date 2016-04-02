import { polyfill } from "es6-promise";
polyfill();
import Fetch from "isomorphic-fetch";

const rootUrl = "http://localhost:4444/api/1.0.0/calendar/";

export default {

    get: function(url) {

      return Fetch(rootUrl + url)
      .then(function(response) {
        return response.json();
      })
      .then(function(data){
        return data
      });

    }

}