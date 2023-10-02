import { join } from 'path';
import { CommonModule } from '@common';
import { ConnectorsModule } from '@connectors';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiModule } from './api/api.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';

@Module({
    imports: [
        InfrastructureModule,
        ConnectorsModule,
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: join(process.cwd(), '.env'),
        }),
        CommonModule,
        ApiModule,
    ],
    providers: [],
})
export class AppModule {}
