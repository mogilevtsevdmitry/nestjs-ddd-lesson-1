import { AggregateRoot } from '@nestjs/cqrs';
import { CHANGE_EMAIL, ChangeEmail } from './change-email/change-email.case';

export class UserDomainServices extends AggregateRoot implements ChangeEmail {
    constructor() {
        super();
    }

    changeEmail = CHANGE_EMAIL;
}
