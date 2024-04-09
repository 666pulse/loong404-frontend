const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com',
};

const testnet = {
  chainId: 97,
  name: 'BNB Smart Chain Testnet',
  currency: 'tBNB',
  explorerUrl: 'https://testnet.bscscan.com',
  rpcUrl: 'https://data-seed-prebsc-1-s1.bnbchain.org:8545',
};

const optest = {
  chainId: 11155420,
  name: 'Optimism Testnet',
  currency: 'ETH',
  explorerUrl: 'https://sepolia-optimism.etherscan.io/',
  rpcUrl: 'https://sepolia.optimism.io',
  contract: {
    GreatLoongAddress: '0xec8DF505661c0d5845Bd3D3F3a4180Eade2ACA32',
    greatLMintAddr: '0xc77dF1E6D4351f8aBa98722f66c481dd236F8885',
    BabyLoongAddress: '0x89426d1e7D8Cc62d89eA543E696ee589DA3722E0',
    babyLMintAddr: '0x799d5050fa3dd87ef31b4Baa918A631A2521CFF4',
    swapAddress: '0xB3914496790Aaab054eDb1325A37D0167E72671d',
    dataAddress: '0x46096ca702716ea68e7fb1A30679fa1B263d7e77',
  },
};

export const Arbitrum_Sepolia = {
  chainId: 421614,
  name: 'Arbitrum Sepolia',
  currency: 'ETH',
  explorerUrl: 'https://sepolia-explorer.arbitrum.io/',
  rpcUrl: 'https://sepolia-rollup.arbitrum.io/rpc',
  contract: {
    GreatLoongAddress: '0x16BC08C21e407343F9C6f951cd11e06C5eC4f0Dd',
    greatLMintAddr: '0x8F3fF5fD42915EF28EABfDBC29005D8b9Be09e6F',
    BabyLoongAddress: '0xA4DCba97b9c82ec0C23CAc52Fc048bc6f963fcD6',
    babyLMintAddr: '0xa4249C1C66cD184877F9a23eCA043497701a597A',
    swapAddress: '0x3FBad78aFC873920F00E7d4373cb59AABa3cB57a',
    dataAddress: '0xb0a2291Bb9B2B14122C509A719Af124199ae0cC7',
    // greatLFarmingAddr: '0xE20e2EdBb15635c9913ac10D91c717018a82fc71',
    // babyLFarmingAddr: '0x376fB81695D3CA27F0A4324f7EbEE2980Fabd785',
    // greatLFarmingAddr: '0x577f47Aa7A310C59C15a8be9F2e31fC3Da41533E',
    // babyLFarmingAddr: '0x8e9DC73e5CC7F38Aef15FD0f17B48e0Cc859E4D9',
    // farmingDataStrongAddr: '0xC21fB21487849D7C3bb221D03Dee228eC0819E57',
    // greatLFarmingAddr: '0x153d75112CfBCA2d45e8530616A2448B33e90B09',
    // babyLFarmingAddr: '0x70fb775C1d00ec57D7424B41d9bB3b2253441D5B',
    greatLFarmingAddr: '0x641b01EcF2425bfc04eD57f416178D249f702759',
    babyLFarmingAddr: '0x4aEc18927Ca4cFcaBd73f4A3B9A8C102BD087cFD',
    farmingDataStrongAddr: '0xC832720288713401718a3A7F5DaED99Ac83AB26a',
  },
};

export const Arbitrum_One = {
  chainId: 42161,
  name: 'Arbitrum LlamaNodes',
  currency: 'ETH',
  explorerUrl: 'https://arbiscan.io/',
  // rpcUrl: 'https://arbitrum.llamarpc.com',
  rpcUrl:
    'https://api.zan.top/node/v1/arb/one/ed431fbd9ace462db9db1addddba90f6',
  contract: {
    GreatLoongAddress: '0xDB3Fe75CF3263218f061C3E22dB037D15652d506',
    greatLMintAddr: '0x9A4cAb87049E493bE82bF8B1dE5d6f264D133fD6',
    BabyLoongAddress: '0x09905C09975908d41bA1D761487F7785D3A7BC70',
    babyLMintAddr: '0x3e28782b382F8d0AA33192e1C68cA9eabDA16f1E',
    swapAddress: '0xBc4B1e8caC87872AA6970f4d396C778CAE4F4C1F',
    dataAddress: '0xc2f9B5ec0CCbB4A0EDD2508Dec4d573a3D413a33',
    greatLFarmingAddr: '',
    babyLFarmingAddr: '',
    farmingDataStrongAddr: '',
  },
};

export const chain =
  process.env.NEXT_PUBLIC_RELEASE_TARGET === 'development'
    ? Arbitrum_Sepolia
    : Arbitrum_One;
