import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (!bcrypt.compare(user!.password!, pass)) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user!.id, username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
