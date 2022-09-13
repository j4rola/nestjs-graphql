import { Injectable } from '@nestjs/common';
import  authors from '../data/authors'
import { Author } from './author.schema';



@Injectable()
export class AuthorService { 

    authors: Partial<Author>[]  

    constructor(){
        this.authors = authors
    }
     
    async findById(id) {
        const result = authors.filter((item) => item.id === id) 

        return result.length ? result[0] : null
    }    

    async findMany() {

        return authors

    }    



}  
