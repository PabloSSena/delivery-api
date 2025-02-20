import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { Address } from 'src/address/address.entity';
import { Users } from 'src/users/users.entity';
import { MenuItem } from 'src/menu-items/menu-items.entity';
import { DataSource } from 'typeorm';

config();

const configService = new ConfigService();

export default new DataSource({
  type: 'postgres',
  host: configService.get('DATABASE_HOST'),
  port: configService.get('DATABASE_PORT'),
  username: configService.get('DATABASE_USERNAME'),
  password: configService.get('DATABASE_PASSWORD'),
  database: configService.get('DATABASE_DATABASE'),
  entities: [Users, Address, MenuItem],
  migrations: [__dirname + '/migrations/**/*{.js,.ts}'],
});
