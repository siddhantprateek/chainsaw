import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from './config/endpoint.config';
import * as morgan from 'morgan';
import helmet from 'helmet';

const { port } = config

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]'))
  await app.listen(port);
}
bootstrap();
