import { Injectable } from '@nestjs/common';
import { CommandBus, EventBus, QueryBus } from '@nestjs/cqrs';
import { UpdateUserEmailCommand, UpdateUserEmailCommandHandler } from '../commands';
import { ChangeEmailDto } from '../dto';

@Injectable()
export class UserFacadeService {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus,
        private readonly eventBus: EventBus,
    ) {}

    async changeEmail(dto: ChangeEmailDto) {
        return this.commandBus.execute<
            UpdateUserEmailCommand,
            Awaited<ReturnType<UpdateUserEmailCommandHandler['execute']>>
        >(new UpdateUserEmailCommand(dto));
    }
}
