import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Public } from 'src/decorators/public.decorator';
import { UsersService } from 'src/services/users.service';
import { CreateUserDTO } from 'src/users/dto/create-user.dto';
import { UpdateUserDTO } from 'src/users/dto/update-user.dto';

@Controller('api/users')
export class UsersController {
  /**
   *
   */
  constructor(private usersService: UsersService) {}
  @Public()
  @Post()
  async create(@Body() body: CreateUserDTO) {
    return this.usersService.createUser(body);
  }

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.usersService.remove(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() body: UpdateUserDTO) {
    return this.usersService.updateUser(id, body);
  }
}
