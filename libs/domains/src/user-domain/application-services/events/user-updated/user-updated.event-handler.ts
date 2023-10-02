import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { UserUpdatedEvent } from './user-updated.event';

@EventsHandler(UserUpdatedEvent)
export class UserUpdatedEventHandler implements IEventHandler {
    handle(event: UserUpdatedEvent) {
        // your code here
        return event;
    }
}
