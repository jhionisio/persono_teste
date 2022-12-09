/* eslint-disable prettier/prettier */
import {  Injectable } from '@nestjs/common';
import { PostDTO } from 'src/common/dtos/post.dto';
import { Post } from './post.entity';

@Injectable()
export class PostConverter {

  async toDTO(entity: Post): Promise<PostDTO> {
    const toDTO: PostDTO = {
      id: entity.id,
      title: entity.title,
      author: entity.author,
      contents: entity.contents,
      createdAt: entity.createdAt,
      category: entity.category
    }
    return toDTO;
  }

  async toEntity(dto: PostDTO): Promise<Post> {
    const toEntity: Post = {
      id: dto.id,
      title: dto.title,
      author: dto.author,
      contents: dto.contents,
      createdAt: dto.createdAt,
      category: dto.category
    }
    return toEntity;
  }

}
