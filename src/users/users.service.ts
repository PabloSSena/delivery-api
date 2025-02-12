import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/create-user.dto';
import { CreateUserResposeDTO } from './dto/create-users-response.dto.ts';
import { Users } from './users.entity';
@Injectable()
export class UsersService {
  /**
   *
   */
  constructor(
    @InjectRepository(Users)
    private readonly UsersRepository: Repository<Users>,
  ) {}

  async findOne(username: string) {
    return await this.UsersRepository.findOneBy({
      username: username,
    });
  }

  async createUser(userDto: CreateUserDTO): Promise<CreateUserResposeDTO> {
    const hashedPassword = await bcrypt.hash(userDto.password, 10);
    const user = this.UsersRepository.create({
      ...userDto,
      password: hashedPassword,
    });
    const newUser = await this.UsersRepository.save(user);
    return newUser;
  }

  async findAll() {
    return this.UsersRepository.find();
  }

  async remove(id: number) {
    return this.UsersRepository.delete(id);
  }
}
