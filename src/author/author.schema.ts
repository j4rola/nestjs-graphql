import { ObjectType, Field, ID, InputType, Int } from '@nestjs/graphql'
import { Book } from '../book/book.schema'

@ObjectType() 
export class Author {
    @Field(() => ID)// <-- Graphql type
    id: number; // <-- TypeScript type 

    @Field()
    name: string;

    @Field(() => [Book])
    books: Book[]; 
}