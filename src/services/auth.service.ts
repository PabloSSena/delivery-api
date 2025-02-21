import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from './users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);

    const isPasswordCorrect = await bcrypt.compare(pass, user!.password);
    if (!user) return new UnauthorizedException();
    if (!isPasswordCorrect) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user!.id, username };
    return {
      user_id: user.id,
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
