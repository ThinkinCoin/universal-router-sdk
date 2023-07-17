import dotenv from 'dotenv'
dotenv.config()

export default {
  networks: {
    hardhat: {
      allowUnlimitedContractSize: false,
      chainId: 1666600000,
      forking: {
        url: `https://api.harmony.one`, // `${process.env.FORK_URL}`
        blockNumber: 15360000,
      },
    },
  },
}
