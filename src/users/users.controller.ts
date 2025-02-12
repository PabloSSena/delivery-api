import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Public } from 'src/decorators/public.decorator';
import { CreateUserDTO } from './dto/create-user.dto';
import { UsersService } from './users.service';

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
}
