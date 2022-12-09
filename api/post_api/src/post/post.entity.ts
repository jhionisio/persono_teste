/* eslint-disable prettier/prettier */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ schema: 'post', name: 't_per_post' })
export class Post {

    @PrimaryGeneratedColumn({ name: 'id_post' })
    id?: number;
  
    @Column({ name: 'ds_title' })
    title: string;

    @Column({ name: 'nm_author' })
    author: string;

    @Column({ name: 'ds_contents' })
    contents: string;
  
    @Column({ name: 'nm_category' })
    category: string;

    @Column({ name: 'dt_created_at' })
    createdAt: Date;

}
