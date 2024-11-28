import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaClientExceptionFilter } from './filters/prisma-exception.filter';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const { httpAdapter } = app.get(HttpAdapterHost);

  app.useGlobalFilters(
    new PrismaClientExceptionFilter(httpAdapter),
    new HttpExceptionFilter(),
  );

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
  console.log('Port is running on 3000');
}
bootstrap();