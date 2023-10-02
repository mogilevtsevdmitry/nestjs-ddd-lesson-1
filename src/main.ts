import { APP_NAME } from '@common/constants';
import { LOGGER_CONFIG } from '@common/main-logger';
import { Logger, ValidationPipe, VersioningType } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import { json } from 'express';
import { WinstonModule } from 'nest-winston';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, { cors: true });
    const configService = app.get(ConfigService);
    const port = configService.get<number>('PORT', 3000);
    app.use(cookieParser());
    app.setGlobalPrefix('api');
    app.use(json({ limit: '100mb' }));

    // Logger
    app.useLogger(WinstonModule.createLogger(LOGGER_CONFIG(APP_NAME())));

    /** Global validation */
    app.useGlobalPipes(new ValidationPipe());

    app.enableShutdownHooks();

    app.use(compression());

    app.enableVersioning({
        type: VersioningType.HEADER,
        header: 'X-Version',
    });

    await app.listen(port, () => {
        Logger.log(`Application started on http://localhost:${port}`, 'Main');
    });
}
bootstrap();
