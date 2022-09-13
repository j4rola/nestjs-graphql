import { Resolver, Query, ResolveField, Parent, Mutation, Args } from '@nestjs/graphql';
import { Book, CreateBookInput, FindBookInput } from './book.schema'
import { BookService } from './book.service';
import { Author } from 'src/author/author.schema';
import { AuthorService } from 'src/author/author.service';


@Resolver(() => Book) //<-- What gql type does the resolver return? 
export class BookResolver {

    constructor(private bookService: BookService, private authorService: AuthorService) {}

    @Query(() => [Book]) // <-- What will our query return? 
    async books /* <-- Query name */ () {
        return this.bookService.findMany(); //resolve the query 
    }

    @Query(() => Book) // <-- What will our query return? 
    async book /* <-- Query name */ (@Args('input') { id }: FindBookInput ) {
        return this.bookService.findById(id); //resolve the query 
    }  

    @Mutation(() => Book)
    async createBook(@Args('input') book: CreateBookInput) {
        return this.bookService.createBook(book) 
    }


    @ResolveField( () => Author ) // <-- What will our query return? 
    async author /* <-- Query name */ (@Parent() book: Book) {
        return this.authorService.findById(book.author); //resolve the query 
    } 



} 
