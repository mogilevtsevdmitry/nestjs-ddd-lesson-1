import { ConfigService } from '@nestjs/config';
import { amqpConfig } from './amqp.config';

export const asyncModuleConfig = {
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => amqpConfig(configService),
};
