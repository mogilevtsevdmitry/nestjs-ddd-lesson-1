import { IUser } from '../domain';

export abstract class UserRepository {
    abstract findUserById(id: UserID): Promise<IUser>;
    abstract findVehicle(): Promise<any>;
}
