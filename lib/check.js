
const Web3 = require('web3');
const web3 = new Web3(Web3.givenProvider || "");

const ERC165Abi = [
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const ERC1155InterfaceId = "0xd9b67a26";
const ERC721InterfaceId = "0x80ac58cd";
const contract ="0x7af3460d552f832fd7e2de973c628acea59b0712";

const checkContract = new web3.eth.Contract(
  ERC165Abi,
  contract
);

async function checkErc() {
    const result721 = await checkContract.methods.supportsInterface(ERC721InterfaceId).call()
    const result1155 = await checkContract.methods.supportsInterface(ERC1155InterfaceId).call()
    console.log("this contact is 721: ", result721)
    console.log("this contact is 1151: ",result1155)
}
checkErc()


const deposit = {
  'dw-rulling-deposit': 'spot-deposit-report',
  'spot-rulling-deposit': 'dw-rulling-deposit',
  'spot-deposit-finished': 'spot-rulling-deposit'
}

const withdraw = {
  'spot-withdraw-report': 'spot-withdraw-report',
  'dw-rulling-deposit': 'spot-withdraw-report',
  'spot-rulling-deposit': 'dw-rulling-deposit',
  'spot-deposit-finished': 'spot-rulling-deposit'
}