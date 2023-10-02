import { UserAggregate } from '@domains/user-domain/domain';
import { UserRepository } from '@domains/user-domain/repositories';
import { Logger } from '@nestjs/common';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { UpdateUserEmailCommand } from './update-user-email.command';

@CommandHandler(UpdateUserEmailCommand)
export class UpdateUserEmailCommandHandler implements ICommandHandler<UpdateUserEmailCommand, void> {
    private readonly logger = new Logger(UpdateUserEmailCommandHandler.name);
    constructor(private readonly repository: UserRepository, private readonly publisher: EventPublisher) {}

    async execute({ dto }: UpdateUserEmailCommand): Promise<void> {
        const existsUser = await this.repository.findUserById(dto.id);
        if (!existsUser) {
            throw new Error('User not found');
        }
        const userAggregate = this.publisher.mergeObjectContext(new UserAggregate(existsUser));
        userAggregate.changeEmail(dto.email);
        userAggregate.commit();
    }
}
