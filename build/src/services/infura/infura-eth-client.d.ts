import EthClient from '../interface/eth-client';
import BigNumber from 'bignumber.js';
export default class InfuraEthClient implements EthClient {
    private readonly web3;
    private readonly contract;
    constructor(infuraUrl: string, contractAddress: string);
    getMostRecentBlock(): Promise<BigNumber>;
    getBalance(address: string, blockNumber: BigNumber): Promise<BigNumber>;
}
