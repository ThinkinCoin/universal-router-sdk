import dotenv from 'dotenv'
dotenv.config()

export default {
  networks: {
    hardhat: {
      allowUnlimitedContractSize: false,
      chainId: 166660000,
      forking: {
        url: `https://api.harmony.one`, // `${process.env.FORK_URL}`
        blockNumber: 15360000,
      },
    },
  },
}
