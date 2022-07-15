/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");
require("dotenv/config");

const { HARDHAT_PORT } = process.env;

module.exports = {
  solidity: "0.7.3",
  networks: {
    localhost: { url: `http://127.0.0.1:${HARDHAT_PORT}` },
    hardhat: {
      accounts: [{"privateKey":"0x20caa8e359bef245f1164c0a36ebd66d6195a33d24a5f5d57d961efac613ba0f","balance":"1000000000000000000000"},{"privateKey":"0x5bd70ae5a19d98b53147844d97bcb24bee534da60ebaf6f111d65aad42a4092e","balance":"1000000000000000000000"},{"privateKey":"0x734bd0038235e5ad6d7eb58f74161e97946e5076d842bcc779f9ca428a385395","balance":"1000000000000000000000"},{"privateKey":"0x7dc1f67ff9f02262b52490fe55ac03cf048d147ac58ebb512d41af90ff896f68","balance":"1000000000000000000000"},{"privateKey":"0xe0d84158c7b20bb94fd2dc4995f3cda6de7e9be75a536fcb9f120d9554f2c26b","balance":"1000000000000000000000"},{"privateKey":"0x3bd155b2c2dc448ef4c972b5807543bae13f20e8e965ae803cffa4d9b4712985","balance":"1000000000000000000000"},{"privateKey":"0xa5a6569968c7cbb14e81a41a03d2f60071922b7dbcd3f99882277f8b74cbcaeb","balance":"1000000000000000000000"},{"privateKey":"0xbe465769901f9d24ef108e74262b9131fcd37180b000cb0286ff0511dbafa3a3","balance":"1000000000000000000000"},{"privateKey":"0x10e0ea4dfc15bdaed5c24ec2a4bae426f60548cdbe147f3be7b8e7a5c1b0a4d3","balance":"1000000000000000000000"},{"privateKey":"0xec8721ffc1662f9d5738801f9f40293a7bfaa3dd144adc9f62b39dd05d1ddd9d","balance":"1000000000000000000000"}]
    },
  },
  paths: {
    sources: './contracts',
    tests: './__tests__/contracts',
    cache: './cache',
    artifacts: './artifacts',
  },
};