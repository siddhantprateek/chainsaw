import { Module } from '@nestjs/common';
import { InteractionController } from './interaction.controller';
import { DicomService } from './interaction.service';

@Module({
    controllers: [InteractionController],
    providers: [DicomService],
})
export class InteractionModule {}