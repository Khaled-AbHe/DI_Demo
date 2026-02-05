import { NestFactory } from '@nestjs/core';
import { ComputerController } from './computer/computer.controller';

async function bootstrap() {
  const app = await NestFactory.create(ComputerController);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
