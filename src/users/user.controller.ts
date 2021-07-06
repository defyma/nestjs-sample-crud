import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    Post,
    Put,
    UseFilters,
} from '@nestjs/common';
import { UserDto } from './user.dto';
import { EntityNotFoundExceptionFilter } from './entity-not-found-excpetion.filter';
import { UserService } from './user.service';

@Controller('users')
// @UseFilters(new EntityNotFoundExceptionFilter())
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async findAll() {
        return {
            success: true,
            message: 'Data found',
            data: await this.userService.findAll(),
        };
    }

    @Get('/testing')
    async tes() {
        return {
            success: true,
        };
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return {
            data: await this.userService.findOne(id),
        };
    }

    @Post()
    async create(@Body() data: UserDto) {
        return {
            data: await this.userService.create(data),
        };
    }

    @Put(':id')
    async update(@Body() data: UserDto, @Param('id') id: number) {
        return {
            data: await this.userService.update(data, id),
        };
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async remove(@Param('id') id: number) {
        await this.userService.delete(id);
    }
}
