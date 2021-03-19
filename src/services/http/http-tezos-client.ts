import axios from 'axios'
import TezosClient from '../interface/tezos-client'
import { TezosMessageUtils } from 'conseiljs'
import BigNumber from 'bignumber.js'

/** Disregard untyped network requests. */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */

/**
 * Implements TezosClient by using HTTP calls.
 */
export default class HttpTezosClient implements TezosClient {
  /**
   * Create a new HTTPS client.
   *
   * @param nodeUrl The URL of the node.
   * @param mapId The big map ID that contains the token ledger.
   */
  public constructor(
    private readonly nodeUrl: string,
    private readonly mapId: number,
  ) { }

  /** TezosClient */

  public async getMostRecentBlock(): Promise<BigNumber> {
    const axiosAPI = axios.create({
      baseURL: this.nodeUrl,
    })
    const endpoint = `chains/main/blocks/head`
    const { data } = await axiosAPI.get(endpoint)
    return new BigNumber(data.header.level)
  }

  public async getBalance(
    address: string,
    blockNumber: BigNumber,
  ): Promise<BigNumber> {
    const packedDataHex = TezosMessageUtils.writePackedData(address, 'address')
    const packedDataBytes = Buffer.from(packedDataHex, 'hex')
    const packedKey = TezosMessageUtils.encodeBigMapKey(packedDataBytes)

    const axiosAPI = axios.create({
      baseURL: this.nodeUrl,
    })
    const endpoint = `chains/main/blocks/${blockNumber.toFixed()}/context/big_maps/${this.mapId}/${packedKey}`

    // by default, if the key hash isn't found (404 error), return 0 as balance
    let response = null
    let returnResponse = 0
    try
    {
      const response = await axiosAPI.get(endpoint)
      returnResponse = response.data.int
    }
    catch (e)
    {
      if (e.response.status !== 404)
      {
        // the error is not a 404, so potential timeout/transport error, rethrow
        throw e
      }
    }
    return new BigNumber(returnResponse)
  }
}
