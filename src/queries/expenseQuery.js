const axios = require("axios");

const getExpensesQuery = async () => {
  try {
    const { data } = await axios.get(" https://dog.ceo/api/breeds/list/all");

    return data?.message;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getExpensesQuery,
};
