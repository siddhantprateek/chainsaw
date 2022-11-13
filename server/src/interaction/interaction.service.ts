import { Injectable, BadRequestException } from "@nestjs/common";
import truffleContract from 'truffle-contract';
import * as DicomArtifacts from '../../../client/src/build/contracts/DiacomContract.json';
import web3 from "../config/utility";

const DicomContract = truffleContract(DicomArtifacts);

@Injectable()
export class DicomService {

    async getBalance(account: string): Promise<string> {
        try {
            const instance = await DicomContract.deployed();
            const value = await instance.getBalance.call(account, { from: account });
            const balance = value.toString();

            return JSON.stringify({
                address: account,
                balance: balance
            })
        } catch (error) {
            console.log(error);
            throw new BadRequestException({ description: 'Unable to get balance of account: '+ account});
        }
    }


    async getContractAddress(): Promise<string> {
        const instance = await DicomContract.deployed();
        return JSON.stringify({
            contractAddress: instance.address
        })
    }
}