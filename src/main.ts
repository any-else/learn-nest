import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //middleware global
  app.useGlobalPipes(new ValidationPipe());
  // cách sử dụng interceptor global
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  const PORT = 8080;
  await app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
  });
}
bootstrap();
