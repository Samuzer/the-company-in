const axios = require("axios");

const config = {
  headers: { Authorization: `${process.env.AUTH}` }
};

const axiosCompanyApi = axios.create({
  headers: {
    "Content-Type": "application/json",
    Authorization: `${process.env.AUTH}`
  }
});

module.exports = axiosCompanyApi;
