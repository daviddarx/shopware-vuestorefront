module.exports = {
  shopwareEndpoint: "https://dev.cookieshop.dev.liip.ch",
  shopwareAccessToken: "SWSCZXRWD210DTG0Q3C2QWTWVW",
  shopwareApiClient: {
    timeout: 5000,
    auth: {
      username: "david.darx",
      password: "david.darx"
    }
  },
  shopwareDomainsAllowList: [
    "http://localhost:3000",
    "http://localhost:3000/en"
  ]
};
