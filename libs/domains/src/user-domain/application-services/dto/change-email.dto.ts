import { IsEmail, IsUUID } from 'class-validator';

export class ChangeEmailDto {
    @IsUUID()
    id: UserID;

    @IsEmail()
    email: string;
}
