"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const conseiljs_1 = require("conseiljs");
const bignumber_js_1 = __importDefault(require("bignumber.js"));
class HttpTezosClient {
    constructor(nodeUrl, mapId) {
        this.nodeUrl = nodeUrl;
        this.mapId = mapId;
    }
    async getMostRecentBlock() {
        const axiosAPI = axios_1.default.create({
            baseURL: this.nodeUrl,
        });
        const endpoint = `chains/main/blocks/head`;
        const { data } = await axiosAPI.get(endpoint);
        return new bignumber_js_1.default(data.header.level);
    }
    async getBalance(address, blockNumber) {
        const packedDataHex = conseiljs_1.TezosMessageUtils.writePackedData(address, 'address');
        const packedDataBytes = Buffer.from(packedDataHex, 'hex');
        const packedKey = conseiljs_1.TezosMessageUtils.encodeBigMapKey(packedDataBytes);
        const axiosAPI = axios_1.default.create({
            baseURL: this.nodeUrl,
        });
        const endpoint = `chains/main/blocks/${blockNumber.toFixed()}/context/big_maps/${this.mapId}/${packedKey}`;
        let response = null;
        let returnResponse = 0;
        try {
            const response = await axiosAPI.get(endpoint);
            returnResponse = response.data.int;
        }
        catch (e) {
            if (e.response.status !== 404) {
                throw e;
            }
        }
        return new bignumber_js_1.default(returnResponse);
    }
}
exports.default = HttpTezosClient;
//# sourceMappingURL=http-tezos-client.js.map