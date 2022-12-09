/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { PostDTO } from 'src/common/dtos/post.dto';
import { Like, Repository } from 'typeorm';
import { PostConverter } from './post.converter';
import { Post } from './post.entity';

@Injectable()
export class PostService {
    constructor(
      @Inject('POST_REPOSITORY')
      private repository: Repository<Post>,
    
      private readonly converter: PostConverter
    
    ) {}
    
    async findAll(): Promise<PostDTO[]> {
      const entity = await this.repository.find();
      const dto: PostDTO[] = [];
      await Promise.all(
        entity.map(async (entity: Post) => {
            const toDTO = await this.converter.toDTO(entity);
            dto.push(toDTO);
        }),
      );
      return dto;
    }

    async findByPartialText(string: string): Promise<PostDTO[]> {
      return await this.repository.find({
        where: { title: Like(`%${string}%`) }
      });
    }

    async create(obj: PostDTO): Promise<void> {
        const toEntity = await this.converter.toEntity(obj);
        this.repository.save(toEntity);
    }
    
    async deleteById(id: number): Promise<void> {
        this.repository.delete(id)
    }
}
