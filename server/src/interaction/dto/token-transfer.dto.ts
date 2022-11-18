import { IsString, IsNumber, Validate, IsPositive, Contains } from "class-validator";

export class TokenTransferDto {
    @IsString()
    sender: string;
    
    @IsString()
    receiver: string;

    @IsNumber()
    @IsPositive()
    amount: number;

    @IsString()
    tx: string;
}