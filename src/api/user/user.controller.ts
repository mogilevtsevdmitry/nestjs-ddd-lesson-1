import { UserFacadeService } from '@domains/user-domain/application-services/facade';
import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { ChangeEmailDto } from './dto';

@Controller('user')
export class UserController {
    constructor(private readonly userFacadeService: UserFacadeService) {}

    @Post('change-email')
    async changeEmail(@Body() dto: ChangeEmailDto) {
        try {
            const res = await this.userFacadeService.changeEmail(dto);
            return res;
        } catch (error) {
            throw new BadRequestException();
        }
    }
}
