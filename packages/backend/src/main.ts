import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const port = process.env.APLICATION_PORT || 3000;

  await app.listen(port).then(() => {
    console.log(`Server is running at http://localhost:${port}/graphql`);
  });
  
}
bootstrap();
