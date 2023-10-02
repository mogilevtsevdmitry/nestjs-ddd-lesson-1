import { IsEmail, IsUUID } from 'class-validator';
export class ChangeEmailDto {
    @IsUUID()
    id: string;

    @IsEmail()
    email: string;
}
