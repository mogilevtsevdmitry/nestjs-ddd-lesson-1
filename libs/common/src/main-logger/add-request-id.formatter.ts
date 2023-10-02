import { v4 } from 'uuid';
import * as winston from 'winston';
import { format } from 'winston';

/**
 * Функция-преобразователь для winston лога
 * Позволяет добавить requestId из запроса к логам
 * Нужно, чтобы можно было выполнять трассировку логов в пределах запроса
 */
export const addRequestIdFormatter: winston.Logform.FormatWrap = format((info) => {
    return {
        ...info,
        requestId: v4(),
    };
});
