import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config(); // Load .env file

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Read port from environment variable or default to 3001
  const port = process.env.PORT || 3001;
  await app.listen(port);

  console.log(`Backend is running on: http://localhost:${port}`);

}
bootstrap();
