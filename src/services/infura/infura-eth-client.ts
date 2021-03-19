import Web3 from 'web3'
import { Contract } from 'web3-eth-contract'
import EthClient from '../interface/eth-client'
import erc20Contract from '../../abi/ERC20BurnableUpgradeSafe.json'
import BigNumber from 'bignumber.js'

// Disable rules for unsafe assignment and typings for ABIs and untyped web3 code.
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

export default class InfuraEthClient implements EthClient {
  private readonly web3: Web3
  private readonly contract: Contract

  public constructor(infuraUrl: string, contractAddress: string) {
    const web3 = new Web3(new Web3.providers.HttpProvider(infuraUrl))

    // stringify / unstrify seems to create a correctly formatted ABI.
    // Without these duplicate calls, this abi will fail to parse for
    // unkown reasons.
    const contractString = JSON.stringify(erc20Contract)
    const { abi } = JSON.parse(contractString)

    this.contract = new web3.eth.Contract(abi, contractAddress)
    this.web3 = web3
  }

  public async getMostRecentBlock(): Promise<BigNumber> {
    const latestBlock = await this.web3.eth.getBlock('latest')
    return new BigNumber(latestBlock.number)
  }

  public async getBalance(address: string, blockNumber: BigNumber): Promise<BigNumber> {
    const blockNumberWeb3 = Web3.utils.toBN(blockNumber.toFixed())

    const result = await this.contract.methods
      .balanceOf(address)
      .call({}, blockNumberWeb3)

    console.log("GOT RESULT: " + JSON.stringify(result))

    return Promise.resolve(new BigNumber(result))
  }
}
