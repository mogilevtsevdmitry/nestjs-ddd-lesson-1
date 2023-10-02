import { DynamicModule, Module, Type } from '@nestjs/common';
import { CqrsModule, CommandBus, QueryBus, EventBus } from '@nestjs/cqrs';
import { COMMAND_HANDLERS } from './application-services/commands';
import { EVENT_HANDLERS } from './application-services/events';
import { QUERY_HANDLERS } from './application-services/queries';
import { UserFacadeService, userFacadeFactory } from './application-services/facade';
import { UserRepository } from './repositories';
import { UserSagaService } from './sagas/user-saga.service';

interface UserModuleProviders {
    userProviders: Type<UserRepository>;
}

@Module({})
export class UserDomainModule {
    static register(providers: UserModuleProviders): DynamicModule {
        return {
            module: UserDomainModule,
            imports: [CqrsModule],
            providers: [
                UserSagaService,
                {
                    provide: UserFacadeService,
                    inject: [CommandBus, QueryBus, EventBus],
                    useFactory: userFacadeFactory,
                },
                {
                    provide: UserRepository,
                    useClass: providers.userProviders,
                },
                ...COMMAND_HANDLERS,
                ...QUERY_HANDLERS,
                ...EVENT_HANDLERS,
            ],
            exports: [UserFacadeService],
        };
    }
}
