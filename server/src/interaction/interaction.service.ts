import { Injectable, BadRequestException } from "@nestjs/common";
import truffleContract from 'truffle-contract';
import * as DicomArtifacts from '../../../client/src/build/contracts/DiacomContract.json';


const DicomContract = truffleContract(DicomArtifacts);