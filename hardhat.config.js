require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({path: ".env"});
/** @type import('hardhat/config').HardhatUserConfig */

const ALCHEMY_KEY = process.env.ALCHEMY_KEY;
const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;
module.exports = {
  solidity: "0.8.9",

  networks:{
    rinkeby:{
      url: ALCHEMY_KEY,
      accounts: [RINKEBY_PRIVATE_KEY],

    },
  },
};
