import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Length } from "class-validator";

export class CreateFundDto {
    @ApiProperty()
    @IsString()
    @Length(3, 120)
    @IsNotEmpty()
    title: string;

    @ApiProperty()
    @IsString()
    @Length(3, 500)
    description: string;

    @ApiProperty()
    @IsString()
    @Length(3, 120)
    @IsNotEmpty()
    fundType: string;
}
