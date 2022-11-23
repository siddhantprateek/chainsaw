import { Controller, Get, Param } from "@nestjs/common";
import { InteractionService } from "./interaction.service";

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

@Controller('v1')
export class InteractionController {
    constructor(private readonly interactionService: InteractionService) {}

    @Get('/')
    getHome(): string {
        return this.interactionService.getNest();
    }

    @Get('/blockdata')
    async getBlockData(): Promise<IDicomData> {
        return this.interactionService.getTransactionValues();
    }


    @Get('/from/:account')
    async getDicomData(@Param('account') account: string): Promise<string> {
        return await this.interactionService.contractInteraction(account);
    }

    @Get('/balance/:id')
    async getBalance(@Param('id') id: string): Promise<string> {
      return await this.interactionService.getBalance(id);
    }

    @Get('/abi')
    async getContractABI(): Promise<string> {
        return await this.interactionService.contractABI();
    }

}