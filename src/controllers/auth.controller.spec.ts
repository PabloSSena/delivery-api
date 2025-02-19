import { Test, TestingModule } from '@nestjs/testing';
import { AuthPayloadDto } from '../auth/dto/auth.dto';
import { AuthService } from '../services/auth.service';
import { AuthController } from './auth.controller';

describe('AuthController', () => {
  let authController: AuthController;
  let authService: AuthService;

  beforeEach(async () => {
    const mockAuthService = {
      signIn: jest.fn().mockResolvedValue('mocked_token'),
    };

    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [{ provide: AuthService, useValue: mockAuthService }],
    }).compile();

    authController = moduleRef.get<AuthController>(AuthController);
    authService = moduleRef.get<AuthService>(AuthService);
  });

  it('deve estar definido', () => {
    expect(authController).toBeDefined();
  });

  it('deve chamar authService.signIn e retornar um token', async () => {
    const dto: AuthPayloadDto = { username: 'user', password: 'pass' };

    const result = await authController.login(dto);

    expect(authService.signIn).toHaveBeenCalledWith(dto.username, dto.password);
    expect(result).toBe('mocked_token');
  });
});
