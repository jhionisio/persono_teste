/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

export class PostDTO {
    
    id?: number;

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    author: string;

    @IsNotEmpty()
    contents: string;

    @IsNotEmpty()
    category: string;

    createdAt: Date;

}

export class PostArrayResponseDTO {
    length?: number;

    array?: PostDTO[];
}