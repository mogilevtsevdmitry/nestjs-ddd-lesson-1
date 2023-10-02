import { ChangeEmailDto } from '../../dto';

export class UpdateUserEmailCommand {
    constructor(public readonly dto: ChangeEmailDto) {}
}
