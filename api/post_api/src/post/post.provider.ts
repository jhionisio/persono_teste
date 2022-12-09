/* eslint-disable prettier/prettier */
import { Connection } from 'typeorm';
import { Post } from './post.entity';

export const postProvider = [
    {
        provide: 'POST_REPOSITORY',
        useFactory: (connection: Connection) =>
            connection.getRepository(Post),
        inject: ['DATABASE_CONNECTION'],
    },
];