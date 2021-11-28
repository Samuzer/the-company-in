/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
const prefix = "http://localhost:5000/company";

export default {
  getCompanyInfo: domain => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${prefix}/${domain}`)
        .then(result => resolve(result.data))
        .catch(err => {
          reject(err);
        });
    });
  }
};
