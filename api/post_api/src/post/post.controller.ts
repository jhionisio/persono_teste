/* eslint-disable prettier/prettier */
import { Controller, Delete, Body, Get, Post, UsePipes, ValidationPipe, Param } from '@nestjs/common';
import { PostArrayResponseDTO, PostDTO } from 'src/common/dtos/post.dto';
import { PostService } from './post.service';

@Controller('post_api/post')
export class PostController {
    constructor(private readonly service: PostService) {}

    @Get()
    async findAll(): Promise<PostDTO[]> {
      return await this.service.findAll();
    }

    @Get("/find_by_partial/:partial")
    async findByPartialText(@Param('partial') partial: string): Promise<PostArrayResponseDTO> {
      const result: PostDTO[] = await this.service.findByPartialText(partial);
      if(result){
        const response: PostArrayResponseDTO = {
          array: result,
          length: result.length
        }
        return response
      }
    }

    @Post()
    @UsePipes(ValidationPipe)
    async create(@Body() obj: PostDTO): Promise<void> {
      return await this.service.create(obj);
    }

    @Delete('/delete_by_id/:id')
    async deleteById(@Param('id') id: number): Promise<void> {
      return await this.service.deleteById(id);
    }
    
}
