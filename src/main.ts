import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerCustomOptions, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { urlencoded, json } from 'express';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidUnknownValues: true,
    transform: true,
    validateCustomDecorators: true,
    transformOptions: {
      enableImplicitConversion: true
    }
  }))
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));

  const configSwagger = new DocumentBuilder()
    .setTitle('Modalin')
    .setDescription('Doc Api')
    .setVersion('0.1')
    .addBearerAuth()
    .build()

  const configCustomSwagger: SwaggerCustomOptions = {
    swaggerOptions: { docExpansion: "none" }
  }
  const doc = SwaggerModule.createDocument(app, configSwagger)
  SwaggerModule.setup('doc', app, doc, configCustomSwagger)

  app.enableCors();
  app.useStaticAssets(join(__dirname, '..', 'pics'), {
    prefix: '/pics/'
  })
  await app.listen(process.env.PORT || 3000);

}
bootstrap();
