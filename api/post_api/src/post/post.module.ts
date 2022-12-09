import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { DatabaseModule } from 'src/database/database.module';
import { PostController } from './post.controller';
import { PostConverter } from './post.converter';
import { postProvider } from './post.provider';
import { PostService } from './post.service';

@Module({
  imports: [HttpModule, DatabaseModule],
  providers: [...postProvider, PostConverter, PostService],
  controllers: [PostController],
})
export class PostModule {}
