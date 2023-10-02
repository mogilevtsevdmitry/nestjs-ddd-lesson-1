import { Global, Module } from '@nestjs/common';
import { UserDomainModule } from '@domains/user-domain';
import { UserAdapterService } from './user-adapter/user-adapter.service';

@Global()
@Module({
    imports: [UserDomainModule.register({ userProviders: UserAdapterService })],
    providers: [UserAdapterService],
    exports: [UserDomainModule],
})
export class InfrastructureModule {}
