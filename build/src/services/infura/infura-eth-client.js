"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const web3_1 = __importDefault(require("web3"));
const ERC20BurnableUpgradeSafe_json_1 = __importDefault(require("../../abi/ERC20BurnableUpgradeSafe.json"));
const bignumber_js_1 = __importDefault(require("bignumber.js"));
class InfuraEthClient {
    constructor(infuraUrl, contractAddress) {
        const web3 = new web3_1.default(new web3_1.default.providers.HttpProvider(infuraUrl));
        const contractString = JSON.stringify(ERC20BurnableUpgradeSafe_json_1.default);
        const { abi } = JSON.parse(contractString);
        this.contract = new web3.eth.Contract(abi, contractAddress);
        this.web3 = web3;
    }
    async getMostRecentBlock() {
        const latestBlock = await this.web3.eth.getBlock('latest');
        return new bignumber_js_1.default(latestBlock.number);
    }
    async getBalance(address, blockNumber) {
        const blockNumberWeb3 = web3_1.default.utils.toBN(blockNumber.toFixed());
        const result = await this.contract.methods
            .balanceOf(address)
            .call({}, blockNumberWeb3);
        console.log("GOT RESULT: " + JSON.stringify(result));
        return Promise.resolve(new bignumber_js_1.default(result));
    }
}
exports.default = InfuraEthClient;
//# sourceMappingURL=infura-eth-client.js.map