import { Type } from '@nestjs/common';
import { ICommandHandler } from '@nestjs/cqrs';
import { UpdateUserEmailCommandHandler } from './update-user-email/update-user-email.command-handler';

/** UpdateUserEmail command */
export * from './update-user-email/update-user-email.command';
/** UpdateUserEmail command handler */
export * from './update-user-email/update-user-email.command-handler';

export const COMMAND_HANDLERS: Type<ICommandHandler>[] = [UpdateUserEmailCommandHandler];
