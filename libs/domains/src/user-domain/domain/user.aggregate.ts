import { IUser } from './user.interface';
import { UserDomainServices } from './services/domain.services';

export class UserAggregate extends UserDomainServices implements IUser {
    constructor(user: Partial<IUser>) {
        super();
        if (user) {
            Object.assign(this, user);
        }
    }
    private _id: string;
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    private _email: string;
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }

    protected compare() {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
        };
    }
}
