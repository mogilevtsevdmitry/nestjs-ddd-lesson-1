import { AmqpConnectionManager, RabbitMQModule, RabbitRpcParamsFactory } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { asyncModuleConfig } from './amqp-module.config';

@Module({
    imports: [RabbitMQModule.forRootAsync(RabbitMQModule, asyncModuleConfig)],
    providers: [RabbitRpcParamsFactory, AmqpConnectionManager],
    exports: [RabbitMQModule],
})
export class AmqpModule {}
