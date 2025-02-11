import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { UsersEntity } from 'src/users/users.entity';
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
  entities: [UsersEntity],
  migrations: [__dirname + '/migrations/**/*{.js,.ts}'],
});
