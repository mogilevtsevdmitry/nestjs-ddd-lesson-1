import { IUser } from '@domains/user-domain/domain';
import { UserRepository } from '@domains/user-domain/repositories';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserAdapterService implements UserRepository {
    findVehicle(): Promise<any> {
        throw new Error('Method not implemented.');
    }
    findUserById(id: string): Promise<IUser> {
        throw new Error('Method not implemented.');
    }
}
