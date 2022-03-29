const Web3 = require("web3");
const web3 = new Web3(Web3.givenProvider || "");

const erc1155abi = [
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "constant": true,
        "inputs": [
            { "name": "account", "type": "address" },
            { "name": "token_id", "type": "uint256" }
        ],
        "name": "balanceOf",
        "outputs": [
            { "name": "", "type": "uint256" }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            { "internalType": "address[]", "name": "account", "type": "address[]" },
            { "internalType": "uint256[]", "name": "account", "type": "uint256[]" }
        ],
        "name": "balanceOfBatch",
        "outputs": [
            { "name": "", "type": "uint256[]" }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            { "internalType": "address", "name": "from", "type": "address" },
            { "internalType": "address", "name": "to", "type": "address" },
            { "internalType": "uint256", "name": "token_id", "type": "uint256" },
            { "internalType": "uint256", "name": "value", "type": "uint256" },
            { "internalType": "bytes", "name": "data", "type": "bytes" }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            { "internalType": "address", "name": "from", "type": "address" },
            { "internalType": "address", "name": "to", "type": "address" },
            { "internalType": "uint256[]", "name": "token_id", "type": "uint256[]" },
            { "internalType": "uint256[]", "name": "value", "type": "uint256[]" },
            { "internalType": "bytes", "name": "data", "type": "bytes" }
        ],
        "name": "safeBatchTransferFrom",
        "outputs": [
            { "name": "", "type": "uint256[]" }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            { "internalType": "address", "name": "_operator", "type": "address" },
            { "internalType": "bool", "name": "_approved", "type": "bool" }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            { "internalType": "address", "name": "owner", "type": "address" },
            { "internalType": "address", "name": "operator", "type": "address" }
        ],
        "name": "isApprovedForAll",
        "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

const contract = '0x3edf71a31b80ff6a45fdb0858ec54de98df047aa'
const checkContract = new web3.eth.Contract(erc1155abi, contract);
const tokenId = 1445

async function erc1155Check() {
    const resultBatch = await checkContract.methods.balanceOfBatch(["0x578ed904d0b713ba244b9ecff3d45160b3bc5d44"], [tokenId]).call();
    const result = await checkContract.methods.balanceOf("0x578ed904d0b713ba244b9ecff3d45160b3bc5d44", tokenId).call();
    console.log(resultBatch)
    console.log(result === '1')
}

// balanceOfBatch(address[] calldata _owners, uint256[] calldata _ids)


erc1155Check()
