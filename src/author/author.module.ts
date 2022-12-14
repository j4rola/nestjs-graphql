import { Module } from '@nestjs/common';
import { BookService } from 'src/book/book.service';
import { AuthorResolver } from './author.resolver';
import { AuthorService } from './author.service';

@Module({
  providers: [ AuthorService, AuthorResolver, BookService ]
})
export class AuthorModule {}  
