import { ApiProperty } from "@nestjs/swagger";

export class CreateAuthDto {
    @ApiProperty()
    username: string;
    @ApiProperty()
    password: string;
}
