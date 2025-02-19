import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from '../services/users.service';
import { CreateUserDTO } from '../users/dto/create-user.dto';
import { UsersController } from './users.controller';

describe('UsersController', () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    const mockUsersService = {
      findAll: jest.fn(() => [{ id: 1, name: 'Pablo' }]),
      createUser: jest.fn((dto: CreateUserDTO) => ({ id: 2, ...dto })),
      remove: jest.fn((id: number) => ({ deleted: true, id })),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [{ provide: UsersService, useValue: mockUsersService }],
    }).compile();

    usersController = module.get<UsersController>(UsersController);
    usersService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(usersController).toBeDefined();
  });

  it('should return an array of users', async () => {
    expect(await usersController.findAll()).toEqual([{ id: 1, name: 'Pablo' }]);
  });

  it('should call UsersService.findAll', () => {
    usersController.findAll();
    expect(usersService.findAll).toHaveBeenCalled();
  });

  it('should create a user', async () => {
    const dto: CreateUserDTO = {
      username: 'John Doe',
      firstName: 'first',
      lastName: 'last',
      password: 'pass',
      email: 'john@example.com',
    };
    expect(await usersController.create(dto)).toEqual({ id: 2, ...dto });
  });

  it('should call UsersService.createUser with correct parameters', async () => {
    const dto: CreateUserDTO = {
      firstName: 'first',
      lastName: 'last',
      password: 'pass',
      username: 'Jane Doe',
      email: 'jane@example.com',
    };
    await usersController.create(dto);
    expect(usersService.createUser).toHaveBeenCalledWith(dto);
  });

  it('should remove a user', async () => {
    expect(await usersController.remove(1)).toEqual({ deleted: true, id: 1 });
  });

  it('should call UsersService.remove with correct id', async () => {
    await usersController.remove(2);
    expect(usersService.remove).toHaveBeenCalledWith(2);
  });
});
