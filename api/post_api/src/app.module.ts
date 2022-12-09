/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PostModule } from './post/post.module';

const ENV = process.env.NODE_ENV;
console.log('Iniciando API com o ENV ' + ENV);


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: !ENV ? '.env.dev' : `.env.${ENV}`,
    }),
    PostModule
  ]
})
export class AppModule {}
