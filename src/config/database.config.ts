import { registerAs } from '@nestjs/config';
import { Users } from 'src/users/users.entity';

export default registerAs('database', () => ({
  type: process.env.DATABASE_TYPE,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DATABASE,
  entities: [Users],
  migrations: [__dirname + '/../../migrations/**/*{.js,.ts}'],
  synchronize: true,
}));
