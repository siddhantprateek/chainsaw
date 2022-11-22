import { Controller, Get, Post, Body, ValidationPipe, UsePipes, Param } from '@nestjs/common';
import { DicomService } from './interaction.service';


@Controller('/v1')
export class InteractionController {
    constructor(private readonly interactService: DicomService) {}

    @Get('/data')
    async getDicomData(): Promise<any> {
        return await this.interactService.contractInteraction();
    }
    
}