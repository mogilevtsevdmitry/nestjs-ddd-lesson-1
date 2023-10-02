import { IUser } from '@domains/user-domain/domain';

export class UserUpdatedEvent {
    constructor(public readonly user: IUser) {}
}
