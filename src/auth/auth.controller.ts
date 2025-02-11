import { Body, Controller, Post } from '@nestjs/common';
import { Public } from 'src/decorators/public.decorator';
import { AuthService } from './auth.service';
import { AuthPayloadDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post()
  login(@Body() authPayload: AuthPayloadDto) {
    return this.authService.signIn(authPayload.username, authPayload.password);
  }
}
