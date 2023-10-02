import { CommandBus, QueryBus, EventBus } from '@nestjs/cqrs';
import { UserFacadeService } from './user-facade.service';

export const userFacadeFactory = (commandBus: CommandBus, queryBus: QueryBus, eventBus: EventBus) =>
    new UserFacadeService(commandBus, queryBus, eventBus);
