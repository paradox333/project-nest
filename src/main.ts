import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalPipes(new ValidationPipe()); consultar por API PREFIX
  // app.setGlobalPrefix(APIPrefix.Version);
  const port = parseInt(process.env.DATABASE_PORT);
  await app.listen(port);
}
bootstrap();
