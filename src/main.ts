import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Pa validar mis datos, pipes y el class-validator
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //para omitir aquellas propiedades que no pertenecan al body o lo establecido 
      forbidNonWhitelisted: true,  //para confirmar que el objeto o parametros sean los correctos, sino, no los tomara
    })
  )
  await app.listen(3000);
}
bootstrap();
