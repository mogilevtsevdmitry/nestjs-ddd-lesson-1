import { format } from 'date-fns';
import { utilities } from 'nest-winston';
import * as winston from 'winston';
import { addRequestIdFormatter } from './add-request-id.formatter';
import { addServiceLogFieldsFormatter } from './add-service-log-fields.formatter';
import { checkEnvs } from './check-envs.util';

export const LOGGER_CONFIG = (serviceName: string, dirEnv = 'LOG_DIR', debugEnv = 'APP_LOGGER_DEBUG') => {
    const logDirName = process.env[dirEnv];
    const appLoggerDebug = process.env[debugEnv];
    checkEnvs(logDirName, dirEnv);
    checkEnvs(appLoggerDebug, `${debugEnv}=on|off`);
    return {
        transports: [
            new winston.transports.Console({
                format: winston.format.combine(
                    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
                    // addRequestIdFormatter(),
                    winston.format.ms(),
                    utilities.format.nestLike(serviceName, {
                        prettyPrint: true,
                        colors: true,
                    }),
                ),
                level: appLoggerDebug === 'on' ? 'debug' : 'info',
            }),
            new winston.transports.File({
                dirname: logDirName,
                filename: `${serviceName}_${format(new Date(), 'yyyy-MM-dd')}.log`,
                format: winston.format.combine(
                    winston.format.timestamp(),
                    addServiceLogFieldsFormatter({ serviceName }),
                    addRequestIdFormatter(),
                    winston.format.logstash(),
                ),
                level: 'debug',
            }),
        ],
    };
};
