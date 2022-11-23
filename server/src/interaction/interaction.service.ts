import { Injectable, BadRequestException } from "@nestjs/common";
import * as truffleContract from '@truffle/contract';
import * as DicomArtifacts from '../../build/contracts/DiacomContract.json';
import web3 from "../config/utility";
import { TokenTransferDto } from './dto/token-transfer.dto';
import axios from "axios";

const DicomContract = truffleContract(DicomArtifacts);
DicomContract.setProvider(web3.currentProvider);

interface IDicomData {
  Manufacturer: string;
  SeriesTime: string;
  PatientName: string;
  InstitutionName: string;
  PhysicianName: string;
  StudyDescription: string;
  StudyDate: string;
  SeriesDate: string;
  SeriesNumber: Number;
}


@Injectable()
export class InteractionService {    
    getNest(): string {
        return 'Welcome to Nest Server';
    }

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

    async getBalanceInEth(account: string): Promise<string> {
        try {
          const instance = await DicomContract.deployed();
          const value = await instance.getBalanceInEth.call(account, { from: account });
          const balance = value.toString();
    
          return JSON.stringify({
            address: account,
            balance: balance
          });
        } catch (error) {
          console.log(error)
          throw new BadRequestException({ description: 'Unable to get balance of account: '+ account});
        }
      }

      async sendSignedTransaction(tokenTransferDto: TokenTransferDto): Promise<string> {
        const { tx } = tokenTransferDto;
        let resp;
        try {
          await web3.eth.sendSignedTransaction(tx).on('receipt', receipt => {
            const { transactionHash, status, to, blockNumber } = receipt;
            resp = {
              transactionHash: transactionHash,
              status: status,
              to: to,
              blockNumber: blockNumber
            }
          });
        } catch (error) {
          console.log(error)
          throw new BadRequestException({ description: error.message });
        }
        return resp;
      }

      async contractInteraction(account: string): Promise<string> {
        try {
          const instance = await DicomContract.deployed();
          const response = await axios.get('http://127.0.0.1:5000/data')
        //   let contractData = response.data
          const result = await instance.set.call(
            "abd",
            "abd",
            "abd",
            "abd",
            "abd",
            "abd",
            "abd",
            "abd",
            123,
            { from: account }
        )
          

          return result
        }catch(error){
          console.error(error);
          throw new BadRequestException({ description: error.message });
        }

        // return "";
      }

      async getTransactionValues(): Promise<IDicomData> {
        try {
          const instance = await DicomContract.deployed();
          let physicianName = await instance.getPhyscianName();
          let Manufacturer = await instance.getManufacturer();
          let patientName = await instance.getPatientName();
          let institutionName = await instance.getInstitutionName();
          let seriesNumber = await instance.getSeriesNumbe();
          let seriesTime = await instance.getSeriesTime();
          let seriesDate = await instance.getSeriesDate();
          let studyDate = await instance.getStudyDate();
          let description = await instance.getStudyDescription();
          
          return {
            PhysicianName: physicianName,
            Manufacturer: Manufacturer,
            PatientName: patientName,
            InstitutionName: institutionName,
            SeriesNumber: seriesNumber,
            SeriesTime: seriesTime,
            SeriesDate: seriesDate,
            StudyDate: studyDate,
            StudyDescription: description
          };
        }catch(error){
          console.error(error);
          throw new BadRequestException({ description: error.message });        
        }
      }


      async contractABI(): Promise<string> {
        try {
            const instance = await DicomContract.deployed()
            return instance
        }catch(error){
            console.error(error);
            throw new BadRequestException({ description: error.message });   
        }
      }
}