const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { LAZY_PANDAS_NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  // Address of the Crypto Devs NFT contract that you deployed in the previous module
  const lazyPandasNFTContractAddress = LAZY_PANDAS_NFT_CONTRACT_ADDRESS;

  /*
    A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
    so cryptoDevsTokenContract here is a factory for instances of our CryptoDevToken contract.
    */
  const LazyPandaTokenContract = await ethers.getContractFactory(
    "LazyPandaToken"
  );

  // deploy the contract
  const deployedLazyPandaTokenContract = await LazyPandaTokenContract.deploy(
    lazyPandasNFTContractAddress
  );

  await deployedLazyPandaTokenContract.deployed();
  // print the address of the deployed contract
  console.log(
    "Lazy Pandas Token Contract Address:",
    deployedLazyPandaTokenContract.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });