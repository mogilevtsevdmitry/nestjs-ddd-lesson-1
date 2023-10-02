import { Module } from '@nestjs/common';
import { AmqpModule } from './amqp/amqp.module';

@Module({
    exports: [AmqpModule],
    imports: [AmqpModule],
})
export class ConnectorsModule {}
