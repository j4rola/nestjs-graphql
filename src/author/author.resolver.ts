import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { BookService } from '../book/book.service';
import { Book } from '../book/book.schema'
import { Author } from 'src/author/author.schema';
import { AuthorService } from 'src/author/author.service';

@Resolver(() => Author) //<-- What gql type does the resolver return? 
export class AuthorResolver {

    constructor(private bookService: BookService, private authorService: AuthorService) {}

    @Query( () => [Author]) // <-- What will our query return? 
    async authors /* <-- Query name */ () {
        return this.authorService.findMany(); //resolve the query 
    }    

    @ResolveField() 
    async books /* <-- Query name */ (@Parent() parent: Author) {
        return this.bookService.findByAuthorId(parent.id); //resolve the query 
    } 

} 