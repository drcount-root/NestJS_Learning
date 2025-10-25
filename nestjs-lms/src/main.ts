import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global prefix (best placed before Swagger setup)
  app.setGlobalPrefix('api/v1');

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('NestJS APIs')
    .setDescription('For learning purposes with best practices')
    .setVersion('1.0')
    .addBearerAuth() // optional, if you plan to secure endpoints
    .build();

  // Generate Swagger document
  const document = SwaggerModule.createDocument(app, config);

  // Setup Swagger UI
  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true, // persists JWT token after reload
    },
  });

  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  console.log(`🚀 Server running on http://localhost:${port}/api/v1`);
  console.log(`📘 Swagger docs available at http://localhost:${port}/docs`);
}

void bootstrap();
