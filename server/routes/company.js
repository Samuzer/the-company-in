const express = require("express");
const router = express.Router();
const axiosCompanyApi = require("../Utils/companyAPI");

// Get all classes
router.get("/:domain", (req, res) => {
  axiosCompanyApi
    .get(`${process.env.API_URL}/find?domain=${req.params.domain}`)
    .then(response => res.json(response.data))
    .catch(err => {
      console.log(err);
      res.send({
        status: "500",
        message: err
      });
    });
});

module.exports = router;
