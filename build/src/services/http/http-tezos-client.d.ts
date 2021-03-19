import TezosClient from '../interface/tezos-client';
import BigNumber from 'bignumber.js';
export default class HttpTezosClient implements TezosClient {
    private readonly nodeUrl;
    private readonly mapId;
    constructor(nodeUrl: string, mapId: number);
    getMostRecentBlock(): Promise<BigNumber>;
    getBalance(address: string, blockNumber: BigNumber): Promise<BigNumber>;
}
