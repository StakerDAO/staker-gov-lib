import BigNumber from 'bignumber.js';
export default interface TezosClient {
    getMostRecentBlock(): Promise<BigNumber>;
    getBalance(address: string, blockNumber: BigNumber): Promise<BigNumber>;
}
