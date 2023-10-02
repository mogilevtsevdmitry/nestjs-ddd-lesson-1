import { UserUpdatedEvent } from '@domains/user-domain/application-services/events';
import { UserAggregate } from '../../user.aggregate';

export interface ChangeEmail {
    changeEmail(email: string): void;
}

export const CHANGE_EMAIL = function (this: UserAggregate, email: string) {
    if (!email) {
        throw new Error('Не правильный email');
    }

    this.email = email;

    this.publish(new UserUpdatedEvent(this.compare())); // Событие обновления пользователя
};
