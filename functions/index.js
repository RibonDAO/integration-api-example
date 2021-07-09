const functions = require("firebase-functions");
const Web3 = require('web3');
const HDWalletProvider = require("@truffle/hdwallet-provider");
const Ribon = require('./Ribon.json');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ origin: true }));

const ETH_NETWORK = process.env.ETH_NETWORK;
const ACCOUNT_ADDRESS = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

app.post('/donationThroughIntegration', async (req, res) => {
    const userWallet = req.body.user;
    const nonProfitWallet = req.body.nonProfit;
    const amount = req.body.amount;
  
    let provider = new HDWalletProvider({
        mnemonic: PRIVATE_KEY,
        providerOrUrl: ETH_NETWORK,
        addressIndex: 0
    });
    const web3 = new Web3(provider);
    const RibonContract = new web3.eth.Contract(Ribon.abi, CONTRACT_ADDRESS);
    const result = await RibonContract.methods.donationThroughIntegration(nonProfitWallet, userWallet, amount).send({from: ACCOUNT_ADDRESS});
    res.send(result);
});


exports.api = functions.https.onRequest(app);