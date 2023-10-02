import { Type } from '@nestjs/common';
import { IEventHandler } from '@nestjs/cqrs';
import { UserUpdatedEventHandler } from './user-updated/user-updated.event-handler';

/** UserUpdated event */
export * from './user-updated/user-updated.event';
/** UserUpdated event handler */
export * from './user-updated/user-updated.event-handler';

export const EVENT_HANDLERS: Type<IEventHandler>[] = [UserUpdatedEventHandler];
