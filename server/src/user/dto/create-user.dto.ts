import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsEnum } from "class-validator";
enum UserType {
    ADMIN = "ADMIN",
    DONOR = "DONOR",
    USER = "USER",
}

export class CreateUserDto {
    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    password: string;

    @IsEnum(UserType)
    @ApiProperty({ enum: UserType })
    userType?: UserType;
}
