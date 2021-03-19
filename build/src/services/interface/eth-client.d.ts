import BigNumber from 'bignumber.js';
export default interface EthClient {
    getMostRecentBlock(): Promise<BigNumber>;
    getBalance(address: string, blockNumber: BigNumber): Promise<BigNumber>;
}
