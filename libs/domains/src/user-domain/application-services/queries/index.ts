import { Type } from '@nestjs/common';
import { IQueryHandler } from '@nestjs/cqrs';

export const QUERY_HANDLERS: Type<IQueryHandler>[] = [];
