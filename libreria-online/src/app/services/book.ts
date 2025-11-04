import { Injectable } from '@angular/core';

export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  description: string;
  coverImage: string;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [
    {
      id: '1',
      title: 'Il Signore degli Anelli',
      author: 'J.R.R. Tolkien',
      genre: 'Fantasy',
      description: 'Un viaggio epico nella Terra di Mezzo.',
      coverImage: 'https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg'
    },
    {
      id: '2',
      title: '1984',
      author: 'George Orwell',
      genre: 'Fiction',
      description: 'Un romanzo distopico su una società sotto sorveglianza.',
      coverImage: 'https://m.media-amazon.com/images/I/81K4A9bQ1GL.jpg'
    },
    {
      id: '3',
      title: 'I Promessi Sposi',
      author: 'Alessandro Manzoni',
      genre: 'Classico',
      description: 'Il celebre romanzo storico ambientato in Lombardia nel 1600.',
      coverImage: 'https://m.media-amazon.com/images/I/81lqxk2IbdL.jpg'
    }
  ];

  getBooks(): Book[] {
    return this.books;
  }

  getBookById(id: string): Book | undefined {
    return this.books.find(b => b.id === id);
  }
}
