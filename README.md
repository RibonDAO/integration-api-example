# Integration Role in Ribon Protocol

Integrations are a very important part of the Ribon protocol. It is through the integrations that:

- We increased the visibility of the Ribon protocol,
- We channel, through free users, the resources obtained with the Promoters' donations,
- We convert free users into new Promoters, which increases the value of the Ribon protocol.

The increased visibility is due to the presence of the protocol brand in more integrations and business flows. Visibility can occur via a whitelabel presence reinforcing the integrator's image, but with identification of the donation as “powered by Ribon”, or a donation using the standard Ribon DApp interface.

The flow of collected donation resources takes place through free users who direct the resources from the donation pool to the NGO with which they better identify. Free users receive rewards, in ribons (our donation token), for performing some critical flow in the business process of the company that performed the integration. Each integration is entitled to a “slice” of the ribons available in the donation pool, to better understand the allocation of ribons for each integration see the details in our [whitepaper](https://ribon.io/wp-content/uploads/2021/07/Ribon-Protocol-Whitepaper-v.0.1.pdf).

With more users making free donations, Ribon protocol's gamification strategies try to convert them into new Promoters. New Promoters increase the value of the protocol and integrations that attract new Promoters are rewarded with RibonGov (Ribon protocol governance token). This token allows integrations to help define the roadmap and strategic direction of the Ribon Protocol.

# Integration Customization

Integrations distribute ribons for every action performed within their platform. They are varied,
diverse and each integration can customize the experience to suit its specific needs, both in increasing some business metric but also as a reward to loyal customers or tasks that are important at the Integration platform.

Integrations benefit from engaging with a charity cause, specifically if it is one in tune with the
company strategy.

Integrations examples:

- A survey company may distribute ribons to respondents to its surveys. By notifying that there will be a “free donation voucher” for respondents at the beginning of the survey, it can increase the completion rate - In a Success case at Ribon a company managed to reduce the cost of surveys by 30% (Case 121 Labs) with such a strategy;
- An ecommerce company can distribute ribons at the end of each purchase and also in the delivery process at each notice by email or message, as a way to increase satisfaction with the purchase and delivery process;
- A mobile game can distribute ribons at the end of each level-up to increase user retention.

# Integration - How to?

Great, we are happy that you want to join our cause and make a better world!

To use our integration you need to figure out 2 things:

About your on business process:

- In which business process would the integration perform better?
- If you need help, call us on our Discord channel, we can exchange some ideas and analyze your use case. We want to have a community showcase with successful implementations ASAP.

the other one is about the integration:

- You will need to get in touch with the integration board to receive your initial ribon allocation.
- Based on the ribon allocation you will have to think about how many ribons to reward to your users based on the actions that they perform on your platform.
- Choose the non profit that your organization wants to support, you can choose more than 1.

Ribon makes this example of Integration API available so that companies can better study the use case and customize the experience to their own needs.

To test our integration API example, the following steps are needed:
Download the project and start a server, then run:

```
npm install
nodemon start
```

In this project there is only one route, the root route. It receives as parameters:

- user, which is a string with the identification of the user's wallet
- nonProfit, which is a string with the identification of the nonProfit wallet that received the donation
- Amount is an integer that reflects the amount of ribs being transferred from the donation pool to the nonProfit wallet

The project has some environment variables:

#### ETH_NETWORK

- if on testnet: https://polygon-mumbai.infura.io/v3/ec33ffe7803b44ba9d3578813ee94c16
- if on mainnet: https://polygon-mainnet.infura.io/v3/ec33ffe7803b44ba9d3578813ee94c16

#### PUBLIC_KEY

The Integration wallet's public key, so that Ribon Protocol can reward the conversion of new Promoters and other protocol incentives to the Integration.

#### PRIVATE_KEY

The private key of the Integration wallet, so that the donation can be authenticated by Ribon protocol.
Only deploy this on a network under your management, at the risk of sharing your private key and allowing transfers from your wallet!

Once you customize your Integration, you can deploy it on any server. Most of our integrations deploy the integration as a cloud function on GCP or a lambda function on AWS.
