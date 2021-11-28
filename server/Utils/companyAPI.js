const axios = require("axios");

const axiosCompanyApi = axios.create({
  headers: {
    "Content-Type": "application/json",
    Authorization: `${process.env.AUTH}`
  }
});

module.exports = axiosCompanyApi;
