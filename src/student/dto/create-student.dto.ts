import { IsEmail, IsInt, IsOptional, IsString, Min } from 'class-validator';

export class CreateStudentDto {
    @IsString()
    name: string;

    @IsInt()
    @Min(1)
    age: number;

    @IsOptional()
    @IsEmail()
    email?: string;
}