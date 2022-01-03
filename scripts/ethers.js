// Ethers.js Implementation by 0xInuarashi, saintmaxi


/*********************************************************************************/
/********************************PRODUCTION CONFIG********************************/
/*********************************************************************************/

const transpondersAddress = "0x9d00D9b009Ab80a18013675011c93796d89de6B4";
const transpondersAbi = () => {
    return '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fontAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"getTokensOfAddress","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"getTransponderStatus","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"mintTransponder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mtmAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"setFontAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"setMTMAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"tokenDescription_","type":"string"}],"name":"setTokenDescription","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"tokenExternalUrl_","type":"string"}],"name":"setTokenExternalUrl","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"tokenName_","type":"string"}],"name":"setTokenName","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenDescription","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenExternalUrl","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]';
};

const spaceCapsulesAddress = "0xeAfA25e962ee875F75FdC97E152D39BB4C8978Ae";
const spaceCapsulesAbi = () => {
    return '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fontAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fontSize","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getArms","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getArtifact","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getChest","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getHead","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getLegs","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"getMoonBag","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getRing","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"getTokensOfAddress","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getVehicle","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getWeapon","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"setFontAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"string_","type":"string"}],"name":"setFontSize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"setMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenDescription","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]';
};

const charactersAddress = "0x075854b315f2cd7ec490853bc5589b09e546449f";
const charactersAbi = () => {
    return '[ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "CC", "outputs": [ { "internalType": "contract iCC", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "CS", "outputs": [ { "internalType": "contract iCS", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MES", "outputs": [ { "internalType": "contract iMES", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "Metadata", "outputs": [ { "internalType": "contract iMetadata", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "SCAddress", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "TPAddress", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "baseTokenURI", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "baseTokenURI_EXT", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "transponderId_", "type": "uint256" }, { "internalType": "uint256", "name": "spaceCapsuleId_", "type": "uint256" }, { "internalType": "uint8", "name": "renderType_", "type": "uint8" } ], "name": "beamCharacter", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "getApproved", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" } ], "name": "isApprovedForAll", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256[]", "name": "transponderIds_", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "spaceCapsuleIds_", "type": "uint256[]" }, { "internalType": "uint8[]", "name": "renderTypes_", "type": "uint8[]" } ], "name": "multiBeamCharacter", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256[]", "name": "tokenIds_", "type": "uint256[]" }, { "internalType": "bytes", "name": "data_", "type": "bytes" } ], "name": "multiSafeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256[]", "name": "tokenIds_", "type": "uint256[]" } ], "name": "multiTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "ownerOf", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "bytes", "name": "bytes_", "type": "bytes" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "operator_", "type": "address" }, { "internalType": "bool", "name": "approved_", "type": "bool" } ], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "metadata_", "type": "address" }, { "internalType": "address", "name": "cc_", "type": "address" }, { "internalType": "address", "name": "cs_", "type": "address" }, { "internalType": "address", "name": "mes_", "type": "address" }, { "internalType": "address", "name": "tp_", "type": "address" }, { "internalType": "address", "name": "sc_", "type": "address" } ], "name": "setContracts", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "setNewOwner", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes4", "name": "interfaceId_", "type": "bytes4" } ], "name": "supportsInterface", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "tokenURI", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "transponderId_", "type": "uint256" }, { "internalType": "uint256", "name": "spaceCapsuleId_", "type": "uint256" }, { "internalType": "uint8", "name": "renderType_", "type": "uint8" }, { "internalType": "address", "name": "contractAddress_", "type": "address" }, { "internalType": "uint256", "name": "uploadId_", "type": "uint256" } ], "name": "uploadCharacter", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "walletOfOwner", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" } ]';
};

const charactersControllerAddress = "0x53beA59B69bF9e58E0AFeEB4f34f49Fc29D10F55";
const charactersControllerAbi = () => {
    return '[ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "CM", "outputs": [ { "internalType": "contract iCM", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "CS", "outputs": [ { "internalType": "contract iCS", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MES", "outputs": [ { "internalType": "contract iMES", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "SC", "outputs": [ { "internalType": "contract IERC721", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "TP", "outputs": [ { "internalType": "contract IERC721", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" }, { "internalType": "uint256[]", "name": "charactersToBurn_", "type": "uint256[]" }, { "internalType": "bool", "name": "useCredits_", "type": "bool" } ], "name": "augmentCharacter", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" }, { "internalType": "uint256[]", "name": "transponders_", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "spaceCapsules_", "type": "uint256[]" }, { "internalType": "bool", "name": "useCredits_", "type": "bool" } ], "name": "augmentCharacterWithMats", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" }, { "internalType": "string", "name": "bio_", "type": "string" }, { "internalType": "bool", "name": "useCredits_", "type": "bool" } ], "name": "changeBio", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" }, { "internalType": "string", "name": "name_", "type": "string" }, { "internalType": "bool", "name": "useCredits_", "type": "bool" } ], "name": "changeName", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" }, { "internalType": "uint8", "name": "renderType_", "type": "uint8" }, { "internalType": "bool", "name": "useCredits_", "type": "bool" } ], "name": "changeRenderType", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "characterChangeBioable", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "characterChangeNameable", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "characterRerollable", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "characterUploadable", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "contractAddressToTokenUploaded", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" } ], "name": "getCharacterYieldRate", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" }, { "internalType": "uint8", "name": "itemType_", "type": "uint8" } ], "name": "getCurrentItemLevel", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint16", "name": "spaceCapsuleId_", "type": "uint16" } ], "name": "getEquipmentBaseBonus", "outputs": [ { "internalType": "uint16", "name": "", "type": "uint16" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [ { "internalType": "uint16", "name": "spaceCapsuleId_", "type": "uint16" }, { "internalType": "string", "name": "keyPrefix_", "type": "string" } ], "name": "getItemRarity", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [ { "internalType": "uint8", "name": "itemType_", "type": "uint8" } ], "name": "getNameOfItem", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" }, { "internalType": "uint8", "name": "attribute_", "type": "uint8" }, { "internalType": "uint8", "name": "amount_", "type": "uint8" } ], "name": "levelCharacterStat", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" }, { "internalType": "uint16", "name": "amount_", "type": "uint16" }, { "internalType": "bool", "name": "useCredits_", "type": "bool" } ], "name": "levelUp", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" }, { "internalType": "uint8[]", "name": "attributes_", "type": "uint8[]" }, { "internalType": "uint8[]", "name": "amounts_", "type": "uint8[]" } ], "name": "multiLevelCharacterStat", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256[]", "name": "characterIds_", "type": "uint256[]" }, { "internalType": "uint16[]", "name": "amounts_", "type": "uint16[]" }, { "internalType": "bool", "name": "useCredits_", "type": "bool" } ], "name": "multiLevelUp", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" }, { "internalType": "uint8[]", "name": "amounts_", "type": "uint8[]" }, { "internalType": "uint8[]", "name": "items_", "type": "uint8[]" }, { "internalType": "bool", "name": "useCredits_", "type": "bool" } ], "name": "multiUpgradeEquipment", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint8", "name": "rarity_", "type": "uint8" } ], "name": "queryBaseEquipmentTier", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [ { "internalType": "uint8", "name": "augments_", "type": "uint8" }, { "internalType": "uint16", "name": "basePoints_", "type": "uint16" }, { "internalType": "uint16", "name": "totalEquipmentBonus_", "type": "uint16" } ], "name": "queryCharacterYieldRate", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "renderTypeChangable", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" }, { "internalType": "bool", "name": "useCredits_", "type": "bool" } ], "name": "rerollRace", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bool", "name": "bool_", "type": "bool" } ], "name": "setCharacterChangeBioable", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bool", "name": "bool_", "type": "bool" } ], "name": "setCharacterChangeNameable", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bool", "name": "bool_", "type": "bool" } ], "name": "setCharacterRerollable", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bool", "name": "bool_", "type": "bool" } ], "name": "setCharacterUploadable", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "cm_", "type": "address" }, { "internalType": "address", "name": "mes_", "type": "address" }, { "internalType": "address", "name": "cs_", "type": "address" }, { "internalType": "address", "name": "sc_", "type": "address" }, { "internalType": "address", "name": "tp_", "type": "address" } ], "name": "setContracts", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint8[]", "name": "types_", "type": "uint8[]" }, { "internalType": "uint256[]", "name": "costs_", "type": "uint256[]" } ], "name": "setCosmeticCosts", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "setNewOwner", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bool", "name": "bool_", "type": "bool" } ], "name": "setRenderTypeChangable", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" }, { "internalType": "uint8", "name": "amount_", "type": "uint8" }, { "internalType": "uint8", "name": "item_", "type": "uint8" }, { "internalType": "bool", "name": "useCredits_", "type": "bool" } ], "name": "upgradeEquipment", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" }, { "internalType": "address", "name": "contractAddress_", "type": "address" }, { "internalType": "uint256", "name": "uploadId_", "type": "uint256" }, { "internalType": "bool", "name": "useCredits_", "type": "bool" } ], "name": "uploadRace", "outputs": [], "stateMutability": "nonpayable", "type": "function" } ]';
};

const MESAddress = "0x984b6968132DA160122ddfddcc4461C995741513";
const MESAbi = () => {
    return '[ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "to_", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "Claim", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "addCredits", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "uint256", "name": "yieldRateAdd_", "type": "uint256" } ], "name": "addYieldRate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "addressToYieldInfo", "outputs": [ { "internalType": "uint40", "name": "yieldRate_", "type": "uint40" }, { "internalType": "uint176", "name": "pendingRewards_", "type": "uint176" }, { "internalType": "uint40", "name": "lastUpdatedTime_", "type": "uint40" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" } ], "name": "allowance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "spender_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "approve", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "claimTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "claimTokensWithoutUpdatingBalances", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "deductCredits", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "getPendingClaimableTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "getStorageClaimableTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "getTotalClaimableTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "getYieldRateOfAddress", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "globalModulus", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "addresses_", "type": "address[]" } ], "name": "multiClaimTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "addresses_", "type": "address[]" } ], "name": "multiClaimTokensWithoutUpdatingBalances", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "to_", "type": "address[]" }, { "internalType": "uint256[]", "name": "amounts_", "type": "uint256[]" } ], "name": "multiTransfer", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "from_", "type": "address[]" }, { "internalType": "address[]", "name": "to_", "type": "address[]" }, { "internalType": "uint256[]", "name": "amounts_", "type": "uint256[]" } ], "name": "multiTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "addresses_", "type": "address[]" } ], "name": "multiUpdateReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "rawGPendingClaimableTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "rawGTotalClaimableTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "rawGetStorageClaimableTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "bool", "name": "bool_", "type": "bool" } ], "name": "setController", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "setNewOwner", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint40", "name": "yieldEndTime_", "type": "uint40" } ], "name": "setYieldEndTime", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "uint256", "name": "yieldRate_", "type": "uint256" } ], "name": "setYieldRate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "uint256", "name": "yieldRateSub_", "type": "uint256" } ], "name": "subYieldRate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "transfer", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "updateReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "yieldEndTime", "outputs": [ { "internalType": "uint40", "name": "", "type": "uint40" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "yieldStartTime", "outputs": [ { "internalType": "uint40", "name": "", "type": "uint40" } ], "stateMutability": "view", "type": "function" } ]';
};

const characterStorageAddress = "0xC7C40032E952F52F1ce7472913CDd8EeC89521c4";
const characterStorageAbi = () => {
return `[ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "characterMain", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "characters", "outputs": [ { "internalType": "uint8", "name": "race_", "type": "uint8" }, { "internalType": "uint8", "name": "renderType_", "type": "uint8" }, { "internalType": "uint16", "name": "transponderId_", "type": "uint16" }, { "internalType": "uint16", "name": "spaceCapsuleId_", "type": "uint16" }, { "internalType": "uint8", "name": "augments_", "type": "uint8" }, { "internalType": "uint16", "name": "basePoints_", "type": "uint16" }, { "internalType": "uint16", "name": "totalEquipmentBonus_", "type": "uint16" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "contractToRace", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "controllers", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "components": [ { "internalType": "uint8", "name": "race_", "type": "uint8" }, { "internalType": "uint8", "name": "renderType_", "type": "uint8" }, { "internalType": "uint16", "name": "transponderId_", "type": "uint16" }, { "internalType": "uint16", "name": "spaceCapsuleId_", "type": "uint16" }, { "internalType": "uint8", "name": "augments_", "type": "uint8" }, { "internalType": "uint16", "name": "basePoints_", "type": "uint16" }, { "internalType": "uint16", "name": "totalEquipmentBonus_", "type": "uint16" } ], "internalType": "struct MTMCharacterStorage.Character", "name": "Character_", "type": "tuple" } ], "name": "createCharacter", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "equipments", "outputs": [ { "internalType": "uint8", "name": "weaponUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "chestUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "headUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "legsUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "vehicleUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "armsUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "artifactUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "ringUpgrades_", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "getCharacter", "outputs": [ { "components": [ { "internalType": "uint8", "name": "race_", "type": "uint8" }, { "internalType": "uint8", "name": "renderType_", "type": "uint8" }, { "internalType": "uint16", "name": "transponderId_", "type": "uint16" }, { "internalType": "uint16", "name": "spaceCapsuleId_", "type": "uint16" }, { "internalType": "uint8", "name": "augments_", "type": "uint8" }, { "internalType": "uint16", "name": "basePoints_", "type": "uint16" }, { "internalType": "uint16", "name": "totalEquipmentBonus_", "type": "uint16" } ], "internalType": "struct MTMCharacterStorage.Character", "name": "", "type": "tuple" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "getEquipment", "outputs": [ { "components": [ { "internalType": "uint8", "name": "weaponUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "chestUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "headUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "legsUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "vehicleUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "armsUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "artifactUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "ringUpgrades_", "type": "uint8" } ], "internalType": "struct MTMCharacterStorage.Equipment", "name": "", "type": "tuple" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "contractAddress_", "type": "address" } ], "name": "getRace", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "getStats", "outputs": [ { "components": [ { "internalType": "uint8", "name": "strength_", "type": "uint8" }, { "internalType": "uint8", "name": "agility_", "type": "uint8" }, { "internalType": "uint8", "name": "constitution_", "type": "uint8" }, { "internalType": "uint8", "name": "intelligence_", "type": "uint8" }, { "internalType": "uint8", "name": "spirit_", "type": "uint8" } ], "internalType": "struct MTMCharacterStorage.Stats", "name": "", "type": "tuple" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "names", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "agility_", "type": "uint8" } ], "name": "setAgility", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "upgrade_", "type": "uint8" } ], "name": "setArmsUpgrades", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "upgrade_", "type": "uint8" } ], "name": "setArtifactUpgrades", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "augments_", "type": "uint8" } ], "name": "setAugments", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint16", "name": "basePoints_", "type": "uint16" } ], "name": "setBasePoints", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "setCharacterMain", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "upgrade_", "type": "uint8" } ], "name": "setChestUpgrades", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "constitution_", "type": "uint8" } ], "name": "setConstitution", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "contractAddress_", "type": "address" }, { "internalType": "uint8", "name": "race_", "type": "uint8" } ], "name": "setContractToRace", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "bool", "name": "bool_", "type": "bool" } ], "name": "setController", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "upgrade_", "type": "uint8" } ], "name": "setHeadUpgrades", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "intelligence_", "type": "uint8" } ], "name": "setIntelligence", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "upgrade_", "type": "uint8" } ], "name": "setLegsUpgrades", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "string", "name": "name_", "type": "string" } ], "name": "setName", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "setNewOwner", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "race_", "type": "uint8" } ], "name": "setRace", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "renderType_", "type": "uint8" } ], "name": "setRenderType", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "upgrade_", "type": "uint8" } ], "name": "setRingUpgrades", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint16", "name": "spaceCapsuleId_", "type": "uint16" } ], "name": "setSpaceCapsuleId", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "spirit_", "type": "uint8" } ], "name": "setSpirit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "strength_", "type": "uint8" } ], "name": "setStrength", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint16", "name": "totalEquipmentBonus_", "type": "uint16" } ], "name": "setTotalEquipmentBonus", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint16", "name": "transponderId_", "type": "uint16" } ], "name": "setTransponderId", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "upgrade_", "type": "uint8" } ], "name": "setVehicleUpgrades", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "upgrade_", "type": "uint8" } ], "name": "setWeaponUpgrades", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "stats", "outputs": [ { "internalType": "uint8", "name": "strength_", "type": "uint8" }, { "internalType": "uint8", "name": "agility_", "type": "uint8" }, { "internalType": "uint8", "name": "constitution_", "type": "uint8" }, { "internalType": "uint8", "name": "intelligence_", "type": "uint8" }, { "internalType": "uint8", "name": "spirit_", "type": "uint8" } ], "stateMutability": "view", "type": "function" } ]`;
};

const etherscanBase = `https://etherscan.io/tx/`;

const openseaBase = `https://api.opensea.io/api/v1/asset/${charactersAddress}`;

/*********************************************************************************/
/***********************************DEV CONFIG************************************/
/*********************************************************************************/

// const transpondersAddress = "0x4b3346fF7c25A072e4b1E4C07B905170b7401d4f";
// const transpondersAbi = () => {
//     return '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fontAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"getTokensOfAddress","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"getTransponderStatus","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"mintTransponder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mtmAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"setFontAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"setMTMAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"tokenDescription_","type":"string"}],"name":"setTokenDescription","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"tokenExternalUrl_","type":"string"}],"name":"setTokenExternalUrl","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"tokenName_","type":"string"}],"name":"setTokenName","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenDescription","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenExternalUrl","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]';
// };

// const spaceCapsulesAddress = "0x4F3Be16f5E235E1E6CDFdbCb816b47aaCf55F1b8";
// const spaceCapsulesAbi = () => {
//     return '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fontAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fontSize","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getArms","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getArtifact","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getChest","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getHead","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getLegs","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"getMoonBag","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getRing","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"getTokensOfAddress","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getVehicle","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getWeapon","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"setFontAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"string_","type":"string"}],"name":"setFontSize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"setMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenDescription","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]';
// };

// const charactersAddress = "0xA9B41786B522AeE445A7368a805ACF374d578Df0";
// const charactersAbi = () => {
//     return '[ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "CC", "outputs": [ { "internalType": "contract iCC", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "CS", "outputs": [ { "internalType": "contract iCS", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MES", "outputs": [ { "internalType": "contract iMES", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "Metadata", "outputs": [ { "internalType": "contract iMetadata", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "SCAddress", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "TPAddress", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "baseTokenURI", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "baseTokenURI_EXT", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "transponderId_", "type": "uint256" }, { "internalType": "uint256", "name": "spaceCapsuleId_", "type": "uint256" }, { "internalType": "uint8", "name": "renderType_", "type": "uint8" } ], "name": "beamCharacter", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "getApproved", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" } ], "name": "isApprovedForAll", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256[]", "name": "transponderIds_", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "spaceCapsuleIds_", "type": "uint256[]" }, { "internalType": "uint8[]", "name": "renderTypes_", "type": "uint8[]" } ], "name": "multiBeamCharacter", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256[]", "name": "tokenIds_", "type": "uint256[]" }, { "internalType": "bytes", "name": "data_", "type": "bytes" } ], "name": "multiSafeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256[]", "name": "tokenIds_", "type": "uint256[]" } ], "name": "multiTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "ownerOf", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "bytes", "name": "bytes_", "type": "bytes" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "operator_", "type": "address" }, { "internalType": "bool", "name": "approved_", "type": "bool" } ], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "metadata_", "type": "address" }, { "internalType": "address", "name": "cc_", "type": "address" }, { "internalType": "address", "name": "cs_", "type": "address" }, { "internalType": "address", "name": "mes_", "type": "address" }, { "internalType": "address", "name": "tp_", "type": "address" }, { "internalType": "address", "name": "sc_", "type": "address" } ], "name": "setContracts", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "setNewOwner", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes4", "name": "interfaceId_", "type": "bytes4" } ], "name": "supportsInterface", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "tokenURI", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "transponderId_", "type": "uint256" }, { "internalType": "uint256", "name": "spaceCapsuleId_", "type": "uint256" }, { "internalType": "uint8", "name": "renderType_", "type": "uint8" }, { "internalType": "address", "name": "contractAddress_", "type": "address" }, { "internalType": "uint256", "name": "uploadId_", "type": "uint256" } ], "name": "uploadCharacter", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "walletOfOwner", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" } ]';
// };

// const charactersControllerAddress = "0xE383B34668521ca751EBF4f23A7694ae18b8fc5a";
// const charactersControllerAbi = () => '[ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "CM", "outputs": [ { "internalType": "contract iCM", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "CS", "outputs": [ { "internalType": "contract iCS", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MES", "outputs": [ { "internalType": "contract iMES", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" }, { "internalType": "bool", "name": "useCredits_", "type": "bool" } ], "name": "MESPayment", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "SC", "outputs": [ { "internalType": "contract IERC721", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "TP", "outputs": [ { "internalType": "contract IERC721", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" }, { "internalType": "uint256[]", "name": "charactersToBurn_", "type": "uint256[]" }, { "internalType": "bool", "name": "useCredits_", "type": "bool" } ], "name": "augmentCharacter", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" }, { "internalType": "uint256[]", "name": "transponders_", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "spaceCapsules_", "type": "uint256[]" }, { "internalType": "bool", "name": "useCredits_", "type": "bool" } ], "name": "augmentCharacterWithMats", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" }, { "internalType": "string", "name": "bio_", "type": "string" }, { "internalType": "bool", "name": "useCredits_", "type": "bool" } ], "name": "changeBio", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" }, { "internalType": "string", "name": "name_", "type": "string" }, { "internalType": "bool", "name": "useCredits_", "type": "bool" } ], "name": "changeName", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" }, { "internalType": "uint8", "name": "renderType_", "type": "uint8" }, { "internalType": "bool", "name": "useCredits_", "type": "bool" } ], "name": "changeRenderType", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "characterRerollable", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "characterUploadable", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "contractAddressToTokenUploaded", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" } ], "name": "getCharacterYieldRate", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint16", "name": "spaceCapsuleId_", "type": "uint16" } ], "name": "getEquipmentBaseBonus", "outputs": [ { "internalType": "uint16", "name": "", "type": "uint16" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [ { "internalType": "uint16", "name": "spaceCapsuleId_", "type": "uint16" }, { "internalType": "string", "name": "keyPrefix_", "type": "string" } ], "name": "getItemRarity", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" }, { "internalType": "uint8", "name": "attribute_", "type": "uint8" }, { "internalType": "uint8", "name": "amount_", "type": "uint8" } ], "name": "levelCharacterStat", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" }, { "internalType": "uint16", "name": "amount_", "type": "uint16" }, { "internalType": "bool", "name": "useCredits_", "type": "bool" } ], "name": "levelUp", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" }, { "internalType": "uint8[]", "name": "attributes_", "type": "uint8[]" }, { "internalType": "uint8[]", "name": "amounts_", "type": "uint8[]" } ], "name": "multiLevelCharacterStat", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256[]", "name": "characterIds_", "type": "uint256[]" }, { "internalType": "uint16[]", "name": "amounts_", "type": "uint16[]" }, { "internalType": "bool", "name": "useCredits_", "type": "bool" } ], "name": "multiLevelUp", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" }, { "internalType": "uint8[]", "name": "amounts_", "type": "uint8[]" }, { "internalType": "uint8[]", "name": "items_", "type": "uint8[]" }, { "internalType": "bool", "name": "useCredits_", "type": "bool" } ], "name": "multiUpgradeEquipment", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint8", "name": "rarity_", "type": "uint8" } ], "name": "queryBaseEquipmentTier", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [ { "internalType": "uint8", "name": "augments_", "type": "uint8" }, { "internalType": "uint16", "name": "basePoints_", "type": "uint16" }, { "internalType": "uint16", "name": "totalEquipmentBonus_", "type": "uint16" } ], "name": "queryCharacterYieldRate", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "renderTypeChangable", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" }, { "internalType": "bool", "name": "useCredits_", "type": "bool" } ], "name": "rerollRace", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bool", "name": "bool_", "type": "bool" } ], "name": "setCharacterRerollable", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bool", "name": "bool_", "type": "bool" } ], "name": "setCharacterUploadable", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "cm_", "type": "address" }, { "internalType": "address", "name": "mes_", "type": "address" }, { "internalType": "address", "name": "cs_", "type": "address" }, { "internalType": "address", "name": "sc_", "type": "address" }, { "internalType": "address", "name": "tp_", "type": "address" } ], "name": "setContracts", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint8[]", "name": "types_", "type": "uint8[]" }, { "internalType": "uint256[]", "name": "costs_", "type": "uint256[]" } ], "name": "setCosmeticCosts", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "setNewOwner", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bool", "name": "bool_", "type": "bool" } ], "name": "setRenderTypeChangable", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" }, { "internalType": "uint8", "name": "amount_", "type": "uint8" }, { "internalType": "uint8", "name": "item_", "type": "uint8" }, { "internalType": "bool", "name": "useCredits_", "type": "bool" } ], "name": "upgradeEquipment", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" }, { "internalType": "address", "name": "contractAddress_", "type": "address" }, { "internalType": "uint256", "name": "uploadId_", "type": "uint256" }, { "internalType": "bool", "name": "useCredits_", "type": "bool" } ], "name": "uploadRace", "outputs": [], "stateMutability": "nonpayable", "type": "function" } ]';

// const MESAddress = "0xc59dE6fCA8AAb399c12f61C57Cb986B79a735821";
// const MESAbi = () => {
//     return '[ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "to_", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "Claim", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "addCredits", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "uint256", "name": "yieldRateAdd_", "type": "uint256" } ], "name": "addYieldRate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "addressToYieldInfo", "outputs": [ { "internalType": "uint40", "name": "yieldRate_", "type": "uint40" }, { "internalType": "uint176", "name": "pendingRewards_", "type": "uint176" }, { "internalType": "uint40", "name": "lastUpdatedTime_", "type": "uint40" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" } ], "name": "allowance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "spender_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "approve", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "claimTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "claimTokensWithoutUpdatingBalances", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "deductCredits", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "getPendingClaimableTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "getStorageClaimableTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "getTotalClaimableTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "getYieldRateOfAddress", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "globalModulus", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "addresses_", "type": "address[]" } ], "name": "multiClaimTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "addresses_", "type": "address[]" } ], "name": "multiClaimTokensWithoutUpdatingBalances", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "to_", "type": "address[]" }, { "internalType": "uint256[]", "name": "amounts_", "type": "uint256[]" } ], "name": "multiTransfer", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "from_", "type": "address[]" }, { "internalType": "address[]", "name": "to_", "type": "address[]" }, { "internalType": "uint256[]", "name": "amounts_", "type": "uint256[]" } ], "name": "multiTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "addresses_", "type": "address[]" } ], "name": "multiUpdateReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "rawGPendingClaimableTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "rawGTotalClaimableTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "rawGetStorageClaimableTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "bool", "name": "bool_", "type": "bool" } ], "name": "setController", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "setNewOwner", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint40", "name": "yieldEndTime_", "type": "uint40" } ], "name": "setYieldEndTime", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "uint256", "name": "yieldRate_", "type": "uint256" } ], "name": "setYieldRate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "uint256", "name": "yieldRateSub_", "type": "uint256" } ], "name": "subYieldRate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "transfer", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "updateReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "yieldEndTime", "outputs": [ { "internalType": "uint40", "name": "", "type": "uint40" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "yieldStartTime", "outputs": [ { "internalType": "uint40", "name": "", "type": "uint40" } ], "stateMutability": "view", "type": "function" } ]';
// };

// const characterStorageAddress = "0x5285e4033ba9742400d105d7f12Fa0140B9E358d";
// const characterStorageAbi = () => {
//     return `[ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "characterMain", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "characters", "outputs": [ { "internalType": "uint8", "name": "race_", "type": "uint8" }, { "internalType": "uint8", "name": "renderType_", "type": "uint8" }, { "internalType": "uint16", "name": "transponderId_", "type": "uint16" }, { "internalType": "uint16", "name": "spaceCapsuleId_", "type": "uint16" }, { "internalType": "uint8", "name": "augments_", "type": "uint8" }, { "internalType": "uint16", "name": "basePoints_", "type": "uint16" }, { "internalType": "uint16", "name": "totalEquipmentBonus_", "type": "uint16" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "contractToRace", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "controllers", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "components": [ { "internalType": "uint8", "name": "race_", "type": "uint8" }, { "internalType": "uint8", "name": "renderType_", "type": "uint8" }, { "internalType": "uint16", "name": "transponderId_", "type": "uint16" }, { "internalType": "uint16", "name": "spaceCapsuleId_", "type": "uint16" }, { "internalType": "uint8", "name": "augments_", "type": "uint8" }, { "internalType": "uint16", "name": "basePoints_", "type": "uint16" }, { "internalType": "uint16", "name": "totalEquipmentBonus_", "type": "uint16" } ], "internalType": "struct MTMCharacterStorage.Character", "name": "Character_", "type": "tuple" } ], "name": "createCharacter", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "equipments", "outputs": [ { "internalType": "uint8", "name": "weaponUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "chestUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "headUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "legsUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "vehicleUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "armsUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "artifactUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "ringUpgrades_", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "getCharacter", "outputs": [ { "components": [ { "internalType": "uint8", "name": "race_", "type": "uint8" }, { "internalType": "uint8", "name": "renderType_", "type": "uint8" }, { "internalType": "uint16", "name": "transponderId_", "type": "uint16" }, { "internalType": "uint16", "name": "spaceCapsuleId_", "type": "uint16" }, { "internalType": "uint8", "name": "augments_", "type": "uint8" }, { "internalType": "uint16", "name": "basePoints_", "type": "uint16" }, { "internalType": "uint16", "name": "totalEquipmentBonus_", "type": "uint16" } ], "internalType": "struct MTMCharacterStorage.Character", "name": "", "type": "tuple" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "getEquipment", "outputs": [ { "components": [ { "internalType": "uint8", "name": "weaponUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "chestUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "headUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "legsUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "vehicleUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "armsUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "artifactUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "ringUpgrades_", "type": "uint8" } ], "internalType": "struct MTMCharacterStorage.Equipment", "name": "", "type": "tuple" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "contractAddress_", "type": "address" } ], "name": "getRace", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "getStats", "outputs": [ { "components": [ { "internalType": "uint8", "name": "strength_", "type": "uint8" }, { "internalType": "uint8", "name": "agility_", "type": "uint8" }, { "internalType": "uint8", "name": "constitution_", "type": "uint8" }, { "internalType": "uint8", "name": "intelligence_", "type": "uint8" }, { "internalType": "uint8", "name": "spirit_", "type": "uint8" } ], "internalType": "struct MTMCharacterStorage.Stats", "name": "", "type": "tuple" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "names", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "agility_", "type": "uint8" } ], "name": "setAgility", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "upgrade_", "type": "uint8" } ], "name": "setArmsUpgrades", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "upgrade_", "type": "uint8" } ], "name": "setArtifactUpgrades", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "augments_", "type": "uint8" } ], "name": "setAugments", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint16", "name": "basePoints_", "type": "uint16" } ], "name": "setBasePoints", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "setCharacterMain", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "upgrade_", "type": "uint8" } ], "name": "setChestUpgrades", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "constitution_", "type": "uint8" } ], "name": "setConstitution", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "contractAddress_", "type": "address" }, { "internalType": "uint8", "name": "race_", "type": "uint8" } ], "name": "setContractToRace", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "bool", "name": "bool_", "type": "bool" } ], "name": "setController", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "upgrade_", "type": "uint8" } ], "name": "setHeadUpgrades", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "intelligence_", "type": "uint8" } ], "name": "setIntelligence", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "upgrade_", "type": "uint8" } ], "name": "setLegsUpgrades", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "string", "name": "name_", "type": "string" } ], "name": "setName", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "setNewOwner", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "race_", "type": "uint8" } ], "name": "setRace", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "renderType_", "type": "uint8" } ], "name": "setRenderType", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "upgrade_", "type": "uint8" } ], "name": "setRingUpgrades", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint16", "name": "spaceCapsuleId_", "type": "uint16" } ], "name": "setSpaceCapsuleId", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "spirit_", "type": "uint8" } ], "name": "setSpirit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "strength_", "type": "uint8" } ], "name": "setStrength", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint16", "name": "totalEquipmentBonus_", "type": "uint16" } ], "name": "setTotalEquipmentBonus", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint16", "name": "transponderId_", "type": "uint16" } ], "name": "setTransponderId", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "upgrade_", "type": "uint8" } ], "name": "setVehicleUpgrades", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "upgrade_", "type": "uint8" } ], "name": "setWeaponUpgrades", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "stats", "outputs": [ { "internalType": "uint8", "name": "strength_", "type": "uint8" }, { "internalType": "uint8", "name": "agility_", "type": "uint8" }, { "internalType": "uint8", "name": "constitution_", "type": "uint8" }, { "internalType": "uint8", "name": "intelligence_", "type": "uint8" }, { "internalType": "uint8", "name": "spirit_", "type": "uint8" } ], "stateMutability": "view", "type": "function" } ]`;
// };

// const etherscanBase = `https://rinkeby.etherscan.io/tx/`;

// const openseaBase = `https://api.opensea.io/api/v1/asset/${charactersAddress}`;

/*********************************END CONFIG************************************/

// Initiate Provider 
const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
const signer = provider.getSigner();

// Initiate Contracts
const transponders = new ethers.Contract(transpondersAddress, transpondersAbi(), signer);
const spaceCapsules = new ethers.Contract(spaceCapsulesAddress, spaceCapsulesAbi(), signer);
const characters = new ethers.Contract(charactersAddress, charactersAbi(), signer);
const charactersController = new ethers.Contract(charactersControllerAddress, charactersControllerAbi(), signer);
const MES = new ethers.Contract(MESAddress, MESAbi(), signer);
const characterStorage = new ethers.Contract(characterStorageAddress, characterStorageAbi(), signer);

// General Functions
const connect = async() => { await provider.send("eth_requestAccounts", []) };
const getAddress = async() => { try { return await signer.getAddress(); } catch { return false; }}; 
const formatEther = (balance_) => { return ethers.utils.formatEther(balance_) }; // divides by 18 modulus
const parseEther = (eth_) => { return ethers.utils.parseEther(eth_) }; // multiplies by 18 modulus
const getChainId = async() => { return await signer.getChainId() };

// General Variables
const maxInt = "115792089237316195423570985008687907853269984665640564039457584007913129639934";

// Approval Functions

const approveTPToCharacters = async() => {
    await transponders.setApprovalForAll(charactersAddress, true).then ( async (tx_) => {
        await waitForTransaction(tx_);
    });
};

const approveTPToCharControl = async() => {
    await transponders.setApprovalForAll(charactersControllerAddress, true).then ( async (tx_) => {
        await waitForTransaction(tx_);
    });
};

const approveSCToCharacters = async() => {
    await spaceCapsules.setApprovalForAll(charactersAddress, true).then ( async (tx_) => {
        await waitForTransaction(tx_);
    });
};

const approveSCToCharControl = async() => {
    await spaceCapsules.setApprovalForAll(charactersControllerAddress, true).then ( async (tx_) => {
        await waitForTransaction(tx_);
    });
};

const approveCharsToCharControl = async() => {
    await characters.setApprovalForAll(charactersControllerAddress, true).then ( async (tx_) => {
        await waitForTransaction(tx_);
    });
};

const getTranspondersOfAddress = async(address_, returnList=false) => {
    const yourTransponders = await transponders.getTokensOfAddress(address_);
    if (yourTransponders.length == 0) {
        assetToOwnedAssets.set('transponder', []);
        if (returnList) {
            return [];
        }
        else {
            return "None";
        }
    }
    else {
        const sortedTransponders = [...yourTransponders].sort((a, b) => a - b);
        assetToOwnedAssets.set('transponder', sortedTransponders);
        if (returnList) {
            return sortedTransponders;
        }
        let sortedTranspondersJSX = "";
        for (let i = 0; i < sortedTransponders.length; i++) {
            let transponderID = Number(sortedTransponders[i]);
            sortedTranspondersJSX += `<span class="clickable" onclick="displayTransponder(${transponderID})">${transponderID} </span>`;
            await loadTransponderImage(transponderID);
        }
        return sortedTranspondersJSX;
    }
};

const getSpaceCapsulesOfAddress = async(address_, returnList=false) => {
    const yourCapsules = await spaceCapsules.getTokensOfAddress(address_);
    if (yourCapsules.length == 0) {
        assetToOwnedAssets.set('capsule', []);
        if (returnList) {
            return [];
        }
        else {
            return "None";
        }
    }
    else {
        const sortedCapsules = [...yourCapsules].sort((a, b) => a - b);
        assetToOwnedAssets.set('capsule', sortedCapsules);
        if (returnList) {
            return sortedCapsules;
        }
        else {
            let sortedCapsulesJSX = "";
            for (let i = 0; i < sortedCapsules.length; i++) {
                let capsuleID = Number(sortedCapsules[i]);
                sortedCapsulesJSX += `<span class="clickable" onclick="displayCapsule(${capsuleID})">${capsuleID} </span>`;
                await loadCapsuleImage(capsuleID);
            }
            return sortedCapsulesJSX;
        }
    }
};

const getCharactersOfAddress = async(address_, returnList=false) => {
    const yourCharacters = await characters.walletOfOwner(address_);
    if (yourCharacters.length == 0) {
        assetToOwnedAssets.set('character', []);
        if (returnList) {
            return [];
        }
        else {
            return "None";
        }
    }
    else {
        const sortedCharacters = [...yourCharacters].sort((a, b) => a - b);
        assetToOwnedAssets.set('character', sortedCharacters);
        if (returnList) {
            return sortedCharacters;
        }
        else {
            let sortedCharactersJSX = "";
            for (let i = 0; i < sortedCharacters.length; i++) {
                let charID = Number(sortedCharacters[i]);
                sortedCharactersJSX += `<span class="clickable" onclick="displayCharacter(${charID})">${charID} </span>`;
                await loadCharacterImage(charID);
            }
            return sortedCharactersJSX;
        }
    }
};

const assetToOwnedAssets = new Map([['transponder', []]], ['capsule', []], ['character', []])

const getMESBalance = async(address_) => {
    return formatEther( (await MES.balanceOf(address_)) );
};

const getMESCredits = async(address_) => {
    return formatEther( (await MES.getTotalClaimableTokens(address_)) );
};

const getMESYieldRate = async(address_) => {
    return formatEther( (await MES.getYieldRateOfAddress(address_)) );
};

const claimMEScredits = async() => {
    const user = await getAddress();
    if ((await getMESCredits(user)) == 0) {
        await displayErrorMessage("Error; No $MES credits to claim!");
    }
    else {
        await MES.claimTokens(user).then( async(tx_) => {
            await waitForTransaction(tx_);
        });
    }
}

const beamCharacter = async() => {
    const transpondersArray = Array.from(selectedForAction.get('beamTransponders'));
    const capsulesArray = Array.from(selectedForAction.get('beamCapsules'));

    if (transpondersArray.length == 0 || capsulesArray.length == 0) {
        displayErrorMessage("Error: Enter all required fields.")    
        return;
    }

    const _beamCharacter = async() => {
        if (transpondersArray.length !== capsulesArray.length) {
            await displayErrorMessage('Error: Beaming requires equal number of transponders and capsules.')
        }
        else {
            try {
                if (transpondersArray.length == 1) {
                    const renderType = 1;
                    await characters.beamCharacter(transpondersArray[0], capsulesArray[0], renderType).then( async(tx_) => {
                        await waitForTransaction(tx_);
                        selectedForAction.set('beamTransponders', new Set());
                        selectedForAction.set('beamCapsules', new Set());
                        $(".selected-transponders-beamTransponders").text("Selected: None");
                        $(".selected-capsules-beamCapsules").text("Selected: None");
                    });
                }
                else if (transpondersArray.length > 1) {
                    const renderTypes = Array(transpondersArray.length).fill(1);
                    await characters.multiBeamCharacter(transpondersArray, capsulesArray, renderTypes).then( async(tx_) => {
                        await waitForTransaction(tx_);
                        selectedForAction.set('beamTransponders', new Set());
                        selectedForAction.set('beamCapsules', new Set());
                        $(".selected-transponders-beamTransponders").text("Selected: None");
                        $(".selected-capsules-beamCapsules").text("Selected: None");
                    });
                }
            }
            catch (error) {
                if ((error.message).includes("Unowned") || (error.message).includes("owner query for nonexistent token")) {
                    await displayErrorMessage(`Error: You must own the specified transponders and capsules!`)
                }
                else if ((error.message).includes("not owner nor approved")) {
                    await displayErrorMessage(`Error: Approve Transponders and Capsules to Characters!`)
                }
                else if ((error.message).includes("INVALID_ARGUMENT")) {
                    await displayErrorMessage(`Error: Invalid input! Ensure IDs are comma-separated with no spaces and no commas at the end!`)
                }
                else {
                    console.log(error);
                }
            }
        }
    }


    // tx chaining i think this should work
    if ( !(await spaceCapsules.isApprovedForAll((await getAddress()), charactersAddress)) ) {
        displayErrorMessage(`Space Capsules must be approved to Beaming Device. Requesting approval...`);
        await sleep(3000)
        await spaceCapsules.setApprovalForAll(charactersAddress, true)
        .then( async(tx_) => { 
            await waitForTransaction(tx_);
            provider.once(tx_.hash, async(tx__) => {
                displayStatusMessage(`Space Capsules approved to Beaming Device!`);
                await sleep(3000)
                if ( !(await transponders.isApprovedForAll((await getAddress()), charactersAddress)) ) {
                    displayErrorMessage(`Transponders must be approved to Beaming Device. Requesting approval...`);
                    await sleep(3000)
                    await transponders.setApprovalForAll(charactersAddress, true)
                    .then( async(tx_) => { 
                        await waitForTransaction(tx_);
                        provider.once(tx_.hash, async(tx__) => {
                            displayStatusMessage(`Transponders approved to Beaming Device! Beaming...`);
                            await sleep(3000)
                            _beamCharacter(); 
                        });
                    })
                }
            });
        })
    } 
    else if ( !(await transponders.isApprovedForAll((await getAddress()), charactersAddress)) ) {
        displayErrorMessage("Transponders must be approved to Beaming Device. Requesting approval...");
        await sleep(3000)
        await transponders.setApprovalForAll(charactersAddress, true)
        .then( async(tx_) => { 
            await waitForTransaction(tx_);
            provider.once(tx_.hash, async(tx__) => {
                displayStatusMessage(`Transponders approved to Beaming Device! Beaming...`);
                await sleep(3000)
                _beamCharacter(); 
            });
        })
    }
    else {
        _beamCharacter(); 
    };
};

const uploadCharacter = async() => {
    const transponderID = selectedForAction.get('uploadTransponder');
    const capsuleID = selectedForAction.get('uploadCapsule');
    const renderType = 1;
    const contractAddress = $("#upload-char-type option:selected").val();
    const uploadID = $("#upload-character-id").val();


    const _uploadCharacter = async() => {
        if (transponderID == null || capsuleID == null || !contractAddress || uploadID == '') {
            await displayErrorMessage("Error: Enter all required fields.")
        }
        else {
            try {
                await characters.uploadCharacter(transponderID, capsuleID, renderType, contractAddress, uploadID).then( async(tx_) => {
                    await waitForTransaction(tx_);
                    selectedForAction.set('uploadTransponder', null);
                    selectedForAction.set('uploadCapsule', null);
                    $(".selected-transponders-uploadTransponder").text("Selected: None");
                    $(".selected-capsules-uploadCapsule").text("Selected: None");
                });
            }
            catch (error) {
                if ((error.message).includes("Unowned") || (error.message).includes("owner query for nonexistent token") || (error.message).includes("You don't own this character")) {
                    await displayErrorMessage(`Error: You must own the specified transponder, capsule, and character!`)
                }
                else if ((error.message).includes("not owner nor approved")) {
                    await displayErrorMessage(`Error: Approve Transponders and Capsules to Characters!`)
                }
                else if ((error.message).includes("This character has already been uploaded!")) {
                    await displayErrorMessage(`Error: This character has already been uploaded!`)
                }
                else if ((error.message).includes("Invalid Race!")) {
                    await displayErrorMessage(`Error: This character type is not supported!`)
                }
                else {
                    console.log(error);
                }
            }
        }
    }


    // tx chaining i think this should work
    if ( !(await spaceCapsules.isApprovedForAll((await getAddress()), charactersAddress)) ) {
        displayErrorMessage(`Space Capsules must be approved to Beaming Device. Requesting approval...`);
        await sleep(3000)
        await spaceCapsules.setApprovalForAll(charactersAddress, true)
        .then( async(tx_) => { 
            await waitForTransaction(tx_);
            provider.once(tx_.hash, async(tx__) => {
                displayStatusMessage(`Space Capsules approved to Beaming Device!`);
                await sleep(3000)
                if ( !(await transponders.isApprovedForAll((await getAddress()), charactersAddress)) ) {
                    displayErrorMessage(`Transponders must be approved to Beaming Device. Requesting approval...`);
                    await sleep(3000)
                    await transponders.setApprovalForAll(charactersAddress, true)
                    .then( async(tx_) => { 
                        await waitForTransaction(tx_);
                        provider.once(tx_.hash, async(tx__) => {
                            displayStatusMessage(`Transponders approved to Beaming Device! Initiating upload...`);
                            await sleep(3000)
                            _uploadCharacter(); 
                        });
                    })
                }
            });
        })
    } 
    else if ( !(await transponders.isApprovedForAll((await getAddress()), charactersAddress)) ) {
        displayErrorMessage(`Transponders must be approved to Beaming Device. Requesting approval...`);
        await sleep(3000)
        await transponders.setApprovalForAll(charactersAddress, true)
        .then( async(tx_) => { 
            await waitForTransaction(tx_);
            provider.once(tx_.hash, async(tx__) => {
                displayStatusMessage(`Transponders approved to Beaming Device! Initiating upload...`);
                await sleep(3000)
                _uploadCharacter(); 
            });
        })
    }
    else {
        _uploadCharacter(); 
    };
};

var loadingAugmentDisplay = false;

const augmentCharacter = async() => {
    const characterID = selectedForAction.get('augmentWCharCharacter');
    const charsToBurnArray = Array.from(selectedForAction.get('augmentWCharBurnedChars'));
    const useCredits = $("#augment-wc-use-credits option:selected").val() === "Yes" ? true : false;

    const _augmentCharacter = async() => {
        if (characterID == null) {
            await displayErrorMessage("Error: Select a character to augment.")
        }
        else if (charsToBurnArray.length == 0) {
            await displayErrorMessage("Error: Select character(s) to burn.")
        }
        else if (charsToBurnArray.includes(characterID)) {
            await displayErrorMessage(`Error: Character ${characterID} cannot be both augmented and burned!`);
        }
        else {
            try {
                await charactersController.augmentCharacter(characterID, charsToBurnArray, useCredits).then( async(tx_) => {
                    await waitForTransaction(tx_);
                    provider.once(tx_.hash, async(tx__) => {
                        if (selectedForAction.get('augmentWCharCharacter') == characterID || !(selectedForAction.get('augmentWCharCharacter'))) {
                            $("#augment-w-char-img").empty();
                            $("#augment-w-char-current-augments").html(`<span class="stats-loading"><h1><span class="one">.</span><span class="two">.</span><span class="three">.</span></h1></span>`);
                            if (!loadingAugmentDisplay) {
                                loadingAugmentDisplay = true;
                                await updateAugment();
                                loadingAugmentDisplay = false;
                            }
                            $(".stats-loading").remove();
                            selectedForAction.set('augmentWCharCharacter', null);
                            selectedForAction.set('augmentWCharBurnedChars', new Set());
                            $(".selected-characters-augmentWCharCharacter").text("Selected: None");
                            $(".selected-characters-augmentWCharBurnedChars").text("Selected: None");
                        }
                        const url = `${openseaBase}/${characterID}/?force_update=true`;
                        await fetch(url);
                    });
                });
            }
            catch (error) {
                if ((error.message).includes("Unowned") || (error.message).includes("owner query for nonexistent token")) {
                    await displayErrorMessage(`Error: Cannot burn unowned characters!`)
                }
                else if ((error.message).includes("Invalid level")) {
                    await displayErrorMessage(`Error: Cannot exceed max augments (10) for character!`);
                }
                else if ((error.message).includes("TNCOA")) {
                    await displayErrorMessage(`Error: Approve Characters to Character Controller!`)
                }
                else if ((error.message).includes("Not enough MES credits")) {
                    await displayErrorMessage(`Error: Insufficient $MES credits for action!`);
                }
                else if ((error.message).includes("Not enough MES to")) {
                    await displayErrorMessage(`Error: Insufficient $MES for action!`);
                }
                else if ((error.message).includes("INVALID_ARGUMENT")) {
                    await displayErrorMessage(`Error: Invalid input! Ensure IDs are comma-separated with no spaces and no commas at the end!`)
                }
                else {
                    console.log(error);
                }
            }
        }
    }

    // Hi saint this is the method in ethers to chain TX and let things happen after the TX is confirmed.
    if ( !(await characters.isApprovedForAll((await getAddress()), charactersControllerAddress)) ) {
        displayErrorMessage(`Characters must be approved to Augmenter. Requesting approval...`);
        await sleep(3000)
        await characters.setApprovalForAll(charactersControllerAddress, true)
        .then( async(tx_) => { 
            await waitForTransaction(tx_);
            provider.once(tx_.hash, async(tx__) => {
                displayStatusMessage(`Characters approved to Augmenter! Augmenting...`);
                await sleep(3000)
                _augmentCharacter(); 
            });
        })
        .catch( (err_) => {console.log(err_); });
    } else {
        _augmentCharacter();
    };
};

var loadingAugmentWithMatsDisplay = false;

const augmentCharacterWithMaterials = async() => {
    const characterID = selectedForAction.get('augmentWMatsCharacter');
    const transpondersArray = Array.from(selectedForAction.get('augmentTransponders'));
    const capsulesArray = Array.from(selectedForAction.get('augmentCapsules'));
    const useCredits = $("#augment-wm-use-credits option:selected").val() === "Yes" ? true : false;

    const _augmentCharacterWithMaterials = async() => {
        if (characterID == null || capsulesArray.length == 0|| transpondersArray.length == 0) {
            await displayErrorMessage("Error: Enter all required fields.")
        }
        else {
            if (transpondersArray.length !== capsulesArray.length) {
                await displayErrorMessage('Error: Augmenting requires equal number of transponders and capsules.')
            }
            else {
                try {
                    await charactersController.augmentCharacterWithMats(characterID, transpondersArray, capsulesArray, useCredits).then( async(tx_) => {
                        await waitForTransaction(tx_);
                        provider.once(tx_.hash, async(tx__) => {
                            if (selectedForAction.get('augmentWMatsCharacter') == characterID || !(selectedForAction.get('augmentWMatsCharacter'))) {
                                $("#augment-w-mats-img").empty();
                                $("#augment-w-mats-current-augments").html(`<span class="stats-loading"><h1><span class="one">.</span><span class="two">.</span><span class="three">.</span></h1></span>`);
                                if (!loadingAugmentWithMatsDisplay) {
                                    loadingAugmentWithMatsDisplay = true;
                                    await updateAugmentWithMats();
                                    loadingAugmentWithMatsDisplay = false;
                                }
                                $(".stats-loading").remove();
                                selectedForAction.set('augmentWMatsCharacter', null);
                                selectedForAction.set('augmentTransponders', new Set());
                                selectedForAction.set('augmentCapsules', new Set());
                                $(".selected-characters-augmentWMatsCharacter").text("Selected: None");
                                $(".selected-transponders-augmentTransponders").text("Selected: None");
                                $(".selected-characters-augmentWMatsCharacter").text("Selected: None");
                                
                            }
                            const url = `${openseaBase}/${characterID}/?force_update=true`;
                            await fetch(url);
                        });            
                    });
                }
                catch (error) {
                    if ((error.message).includes("Not owner") || (error.message).includes("owner query for nonexistent token")) {
                        await displayErrorMessage(`Error: You must own the specified transponders and capsules!`)
                    }
                    else if ((error.message).includes("Invalid level")) {
                        await displayErrorMessage(`Error: Cannot exceed max augments (10) for character!`);
                    }
                    else if ((error.message).includes("not owner nor approved")) {
                        await displayErrorMessage(`Error: Approve Transponders and Capsules to Character Controller!`)
                    }
                    else if ((error.message).includes("Not enough MES credits")) {
                        await displayErrorMessage(`Error: Insufficient $MES credits for action!`);
                    }
                    else if ((error.message).includes("Not enough MES to")) {
                        await displayErrorMessage(`Error: Insufficient $MES for action!`);
                    }
                    else {
                        console.log(error);
                    }
                }
            }
        }
    };

    // tx chaining i think this should work
    if ( !(await spaceCapsules.isApprovedForAll((await getAddress()), charactersControllerAddress)) ) {
        displayErrorMessage(`Space Capsules must be approved to Augmenter. Requesting approval...`);
        await sleep(3000)
        await spaceCapsules.setApprovalForAll(charactersControllerAddress, true)
        .then( async(tx_) => { 
            await waitForTransaction(tx_);
            provider.once(tx_.hash, async(tx__) => {
                displayStatusMessage(`Space Capsules approved to Augmenter!`);
                await sleep(3000)
                if ( !(await transponders.isApprovedForAll((await getAddress()), charactersControllerAddress)) ) {
                    displayErrorMessage(`Transponders must be approved to Augmenter. Requesting approval...`);
                    await sleep(3000)
                    await transponders.setApprovalForAll(charactersControllerAddress, true)
                    .then( async(tx_) => { 
                        await waitForTransaction(tx_);
                        provider.once(tx_.hash, async(tx__) => {
                            displayStatusMessage(`Transponders approved to Augmenter! Augmenting with materials...`);
                            await sleep(3000)
                            _augmentCharacterWithMaterials(); 
                        });
                    })
                }
            });
        })
    } 
    else if ( !(await transponders.isApprovedForAll((await getAddress()), charactersControllerAddress)) ) {
        displayErrorMessage(`Transponders must be approved to Augmenter. Requesting approval...`);
        await sleep(3000)
        await transponders.setApprovalForAll(charactersControllerAddress, true)
        .then( async(tx_) => { 
            await waitForTransaction(tx_);
            provider.once(tx_.hash, async(tx__) => {
                displayStatusMessage(`Transponders approved to Augmenter! Augmenting with materials...`);
                await sleep(3000)
                _augmentCharacterWithMaterials(); 
            });
        })
    }
    else {
        _augmentCharacterWithMaterials(); 
    };
};

const levelUpBasePoints = async() => {
    const characterID = selectedForAction.get('levelUpCharacter');
    const amount = Number($("#level-up-amount").val());
    const useCredits = $("#level-up-use-credits option:selected").val() === "Yes" ? true : false;
    
    if (characterID == null || !amount) {
        await displayErrorMessage("Error: Enter all required fields.")
    }
    else {
        try {
            await charactersController.levelUp(characterID, amount, useCredits).then( async(tx_) => {
                await waitForTransaction(tx_);
                provider.once(tx_.hash, async(tx__) => {
                    if (selectedForAction.get('levelUpCharacter') == characterID || !(selectedForAction.get('levelUpCharacter'))) {
                        $("#level-up-char-stats").html(`<span class="stats-loading"><h1><span class="one">.</span><span class="two">.</span><span class="three">.</span></h1></span>`);
                        const stats = await characterStorage.characters(characterID);
                        const currentBasePoints = stats.basePoints_;
                        $("#level-up-char-stats").html(`<h3>Current Base Points: ${currentBasePoints}</h3>`);
                        $(".stats-loading").remove();
                        $("#level-up-amount").empty(); 
                        $("#level-up-amount").append(`<option value="">-</option>`);
                        
                        const pointsLeft = 50 - currentBasePoints;
                        for (let i = 1; i <= pointsLeft; i++) {
                            $("#level-up-amount").append(`<option value="${i}">${i}</option>`); 
                        }
                        selectedForAction.set('levelUpCharacter', null);
                        $("selected-characters-levelUpCharacter").text("Selected: None");
                    }
                    const url = `${openseaBase}/${characterID}/?force_update=true`;
                    await fetch(url);
                });            
            });
        }
        catch (error) {
            if ((error.message).includes("Invalid Level")) {
                await displayErrorMessage(`Error: Level up cannot exceed max base points (50) for character!`);
            }
            else if ((error.message).includes("Not enough MES credits")) {
                await displayErrorMessage(`Error: Insufficient $MES credits for action!`);
            }
            else if ((error.message).includes("Not enough MES to")) {
                await displayErrorMessage(`Error: Insufficient $MES for action!`);
            }
            else {
                console.log(error);
            }
        }

    }
};

var loadingEquipLevelDisplay = false;

const upgradeEquipment = async() => {
    const characterID = selectedForAction.get('equipCharacter');
    const amount = Number($("#upgrade-eq-amount").val());
    const item = Number($("#upgrade-eq-type").val());
    const useCredits = $("#equipment-use-credits option:selected").val() === "Yes" ? true : false;

    if (characterID == null|| !amount || !item) {
        await displayErrorMessage("Error: Enter all required fields.")
    }
    else {
        try {
            await charactersController.upgradeEquipment(characterID, amount, item, useCredits).then( async(tx_) => {
                await waitForTransaction(tx_);
                provider.once(tx_.hash, async(tx__) => {
                    if (selectedForAction.get('equipCharacter') == characterID || !(selectedForAction.get('equipCharacter'))) {
                        $("#equip-stats-1").html(`<span class="stats-loading"><h1><span class="one">.</span><span class="two">.</span><span class="three">.</span></h1></span>`);
                        $("#equip-stats-2").html(`<span class="stats-loading"><h1><span class="one">.</span><span class="two">.</span><span class="three">.</span></h1></span>`);            
                        if (!loadingEquipLevelDisplay) {
                            loadingEquipLevelDisplay = true;
                            await updateEquipmentLevelDisplay(characterID);
                            loadingEquipLevelDisplay = false;
                        }
                        selectedForAction.set('equipCharacter', null);
                        $("selected-characters-equipCharacter").text("Selected: None");
                        $(".stats-loading").remove();
                    }
                    const url = `${openseaBase}/${characterID}/?force_update=true`;
                    await fetch(url);
                });                
            });
        }
        catch (error) {
            if ((error.message).includes("past upgradability")) {
                await displayErrorMessage(`Error: Upgrade cannot exceed max level (4) for equipment!`);
            }
            else if ((error.message).includes("Not enough MES credits")) {
                await displayErrorMessage(`Error: Insufficient $MES credits for action!`);
            }
            else if ((error.message).includes("Not enough MES to")) {
                await displayErrorMessage(`Error: Insufficient $MES for action!`);
            }
            else {
                console.log(error);
            }
        }

    }
};

const changeCharacterBio = async() => {
    const characterID = selectedForAction.get('changeBio');
    const bio = $("#change-bio-input").val();
    const useCredits = $("#change-bio-use-credits option:selected").val() === "Yes" ? true : false;
    
    if (characterID == null) {
        await displayErrorMessage("Error: Select a character.")
    }
    else {
        try {
            await charactersController.changeBio(characterID, bio, useCredits).then( async(tx_) => {
                await waitForTransaction(tx_);
                provider.once(tx_.hash, async(tx__) => {
                    if (selectedForAction.get('changeBio') == characterID || !(selectedForAction.get('changeBio'))) {
                        await updateCharBioImage();
                        selectedForAction.set('changeBio', null);
                        $("selected-characters-changeBio").text("Selected: None");
                        $("#change-bio-input").val('');
                    }
                    const url = `${openseaBase}/${characterID}/?force_update=true`;
                    await fetch(url);
                });            
            });
        }
        catch (error) {
            if ((error.message).includes("unallowed characters")) {
                await displayErrorMessage(`Error: Biography contains forbidden characters!`);
            }
            else if ((error.message).includes("Not enough MES credits")) {
                await displayErrorMessage(`Error: Insufficient $MES credits for action!`);
            }
            else if ((error.message).includes("Not enough MES to")) {
                await displayErrorMessage(`Error: Insufficient $MES for action!`);
            }
            else {
                console.log(error);
            }
        }

    }
};

const changeCharacterName = async() => {
    const characterID = selectedForAction.get('changeName');
    const name = $("#change-name-input").val();
    const useCredits = $("#change-name-use-credits option:selected").val() === "Yes" ? true : false;
    
    if (characterID == null) {
        await displayErrorMessage("Error: Select a character.")
    }
    else {
        try {
            await charactersController.changeName(characterID, name, useCredits).then( async(tx_) => {
                await waitForTransaction(tx_);
                provider.once(tx_.hash, async(tx__) => {
                    if (selectedForAction.get('changeName') == characterID || !(selectedForAction.get('changeName'))) {
                        await updateCharNameImage();
                        selectedForAction.set('changeName', null);
                        $("selected-characters-changeName").text("Selected: None");
                        $("#change-name-input").val('');
                    }
                    const url = `${openseaBase}/${characterID}/?force_update=true`;
                    await fetch(url);
                });            
            });
        }
        catch (error) {
            if ((error.message).includes("unallowed characters")) {
                await displayErrorMessage(`Error: Biography contains forbidden characters!`);
            }
            else if ((error.message).includes("Not enough MES credits")) {
                await displayErrorMessage(`Error: Insufficient $MES credits for action!`);
            }
            else if ((error.message).includes("Not enough MES to")) {
                await displayErrorMessage(`Error: Insufficient $MES for action!`);
            }
            else {
                console.log(error);
            }
        }

    }
};

const rerollCharacterRace = async() => {
    const characterID = selectedForAction.get('rerollRace');
    const useCredits = $("#change-name-use-credits option:selected").val() === "Yes" ? true : false;
    
    if (characterID == null) {
        await displayErrorMessage("Error: Select a character.")
    }
    else {
        try {
            await charactersController.rerollRace(characterID, useCredits).then( async(tx_) => {
                await waitForTransaction(tx_);
                provider.once(tx_.hash, async(tx__) => {
                    if (selectedForAction.get('rerollRace') == characterID || !(selectedForAction.get('rerollRace'))) {
                        await updateRerollRaceImage();
                        selectedForAction.set('rerollRace', null);
                        $("selected-characters-rerollRace").text("Selected: None");
                    }
                    const url = `${openseaBase}/${characterID}/?force_update=true`;
                    await fetch(url);
                });            
            });
        }
        catch (error) {
            if ((error.message).includes("Not enough MES credits")) {
                await displayErrorMessage(`Error: Insufficient $MES credits for action!`);
            }
            else if ((error.message).includes("Not enough MES to")) {
                await displayErrorMessage(`Error: Insufficient $MES for action!`);
            }
            else {
                console.log(error);
            }
        }

    }
};

const uploadCharacterRace = async() => {
    const characterID = selectedForAction.get('uploadRace');
    const contractAddress = $("#upload-race-type option:selected").val();
    const uploadID = $("#upload-race-id").val();
    const useCredits = $("#upload-race-use-credits option:selected").val() === "Yes" ? true : false;
    
    if (characterID == null || !contractAddress || uploadID == '') {
        await displayErrorMessage("Error: Enter all required fields.")
        console.log(characterID, contractAddress, uploadID)
    }
    else {
        try {
            await charactersController.uploadRace(characterID, contractAddress, uploadID, useCredits).then( async(tx_) => {
                await waitForTransaction(tx_);
                provider.once(tx_.hash, async(tx__) => {
                    if (selectedForAction.get('uploadRace') == characterID || !(selectedForAction.get('uploadRace'))) {
                        await updateUploadRaceImage();
                        selectedForAction.set('uploadRace', null);
                        $("selected-characters-uploadRace").text("Selected: None");
                    }
                    const url = `${openseaBase}/${characterID}/?force_update=true`;
                    await fetch(url);
                });            
            });
        }
        catch (error) {
            if ((error.message).includes("Character type is not uploadable")) {
                await displayErrorMessage(`Error: Character type is not uploadable!!`);
            }
            else if ((error.message).includes("Unowned") || (error.message).includes("owner query for nonexistent token") || (error.message).includes("You don't own this character")) {
                await displayErrorMessage(`Error: You must own the specified transponder, capsule, and character!`)
            }
            else if ((error.message).includes("not owner nor approved")) {
                await displayErrorMessage(`Error: Approve Transponders and Capsules to Characters!`)
            }
            else if ((error.message).includes("This character has already been uploaded!")) {
                await displayErrorMessage(`Error: This character has already been uploaded!`)
            }
            else if ((error.message).includes("Not enough MES credits")) {
                await displayErrorMessage(`Error: Insufficient $MES credits for action!`);
            }
            else if ((error.message).includes("Not enough MES to")) {
                await displayErrorMessage(`Error: Insufficient $MES for action!`);
            }
            else {
                console.log(error);
            }
        }
    }
};

// Processing txs

// After Tx Hook
const waitForTransaction = async(tx_) => {
    startLoading(tx_);
    provider.once(tx_.hash, async (transaction_) => {
        await endLoading(tx_, transaction_.status);
    });
};

// Resuming UI display, refreshing market for pending txs across pages
var pendingTransactions = localStorage.getItem("MTMpendingTxs");

if (!pendingTransactions) {
    pendingTransactions = new Set();
}
else {
    pendingTransactions = new Set(Array.from(JSON.parse(pendingTransactions)));
    pendingTxArray = Array.from(pendingTransactions);
    pendingTransactions = new Set();

    for (let i =0; i < pendingTxArray.length; i++) {
        waitForTransaction(pendingTxArray[i]);
    }
    localStorage.removeItem("MTMpendingTxs");
}

function cachePendingTransactions() {
    localStorage.setItem("MTMpendingTxs", JSON.stringify(Array.from(pendingTransactions)));
}

function startLoading(tx) {
    let txHash = tx.hash;
    const etherscanLink = `${etherscanBase}${txHash}`;
    const loadingDiv = `<a href="${etherscanLink}" class="etherscan-link" id="etherscan-link-${txHash}" target="_blank" rel="noopener noreferrer"><div class="loading-div" id="loading-div-${txHash}">PROCESSING<span class="one">.</span><span class="two">.</span><span class="three">.</span><br>CLICK FOR ETHERSCAN</div></a><br>`;
    $("#pending-transactions").append(loadingDiv);

    pendingTransactions.add(tx);
}

async function endLoading(tx, txStatus) {
    let txHash = tx.hash;
    $(`#loading-div-${txHash}`).html("");
    let status = txStatus == 1 ? "SUCCESS" : "ERROR";
    $(`#loading-div-${txHash}`).addClass("blinking");
    if (txStatus == 1) {
        $(`#loading-div-${txHash}`).addClass("success");
    }
    else if (txStatus == 0) {
        $(`#loading-div-${txHash}`).addClass("failure");
    }
    $(`#loading-div-${txHash}`).append(`TRANSACTION ${status}.<br>VIEW ON ETHERSCAN.`);
    await sleep(7000);
    $(`#etherscan-link-${txHash}`).remove();
    pendingTransactions.delete(tx);
    if (pendingTransactions.size == 0) {
        await updateInfo();
        await loadCharacterSelect();
    }
}

// Workers
const updateInfo = async() => {
    const _address = !(await getAddress()) ? "CONNECT WALLET!" : (await getAddress());    
    if (_address === "CONNECT WALLET!") {
        return;
    }
    else {
        $("#account").text(`${_address.substr(0,9)}...`);
        $("#mobile-account").text(`${_address.substr(0,9)}...`);
        $("#account").addClass("connected-account");
        $("#mobile-account").addClass("connected-account");
    }

    $("#your-yield-rate").html(`${await getMESYieldRate(_address)} <img src="./images/mes.png" width="30px">`);
    $("#your-mes").html(`${await getMESBalance(_address)} <img src="./images/mes.png" width="30px">`);
    $("#your-mes-credits").html(`${await getMESCredits(_address)} <img src="./images/mes.png" width="30px"><div style="height:5px" class="hide-on-desktop"></div><span onclick="claimMEScredits()">CLAIM</span>`);
    $("#your-transponders").html( (await getTranspondersOfAddress(_address)) );
    $("#your-space-capsules").html( (await getSpaceCapsulesOfAddress(_address)) );
    $("#your-characters").html( (await getCharactersOfAddress(_address)) );
};

setInterval( async() => {
    await updateInfo();
}, 5000)

ethereum.on("accountsChanged", async (accounts_) => { 
    await updateInfo();
    location.reload();
});

window.onload = async() => {
    await updateInfo();
    await loadCharacterSelect();
    if (window.location.pathname == "/my-characters.html" || window.location.pathname == "/mtmtest/my-characters.html") {
        await populateMyCharacters();
    }
};

window.onunload = async()=>{
    cachePendingTransactions();
}