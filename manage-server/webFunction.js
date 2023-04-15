const Web3 = require('web3')
const mycon=require('./contracts/manageDB.json')
const web3 = new Web3('http://127.0.0.1:7545')
const mycontract = new web3.eth.Contract(mycon,'0xbBd7139C56555A84c5fb2f71fD114b544D5e6Bd0')
//console.log(mycontract)
const account='0x35e4a42A1b54751675f91bfACE7bf09c492E6683'
module.exports.mycontract=mycontract
module.exports.account=account

