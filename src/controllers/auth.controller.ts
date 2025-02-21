import { Body, Controller, Post } from '@nestjs/common';
import { Public } from 'src/decorators/public.decorator';
import { AuthPayloadDto } from '../auth/dto/auth.dto';
import { AuthService } from '../services/auth.service';

@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post()
  login(@Body() authPayload: AuthPayloadDto) {
    return this.authService.signIn(authPayload.email, authPayload.password);
  }
}
