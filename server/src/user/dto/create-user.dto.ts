import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsEnum, IsNotEmpty } from "class-validator";
enum UserType {
    ADMIN = "ADMIN",
    DONOR = "DONOR",
    USER = "USER",
}

export class CreateUserDto {
    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    password: string;

    @ApiProperty({ enum: UserType })
    @IsEnum(UserType)
    userType?: UserType;
}
