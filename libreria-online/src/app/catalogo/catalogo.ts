import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book, BookService } from '../services/book';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-catalogo',
  imports: [CommonModule, FormsModule],
  templateUrl: './catalogo.html',
  styleUrls: ['./catalogo.css']
})
export class CatalogoComponent implements OnInit {
  books: Book[] = [];
  filteredBooks: Book[] = [];
  searchQuery: string = '';
  selectedGenre: string = '';
  genres: string[] = ['Fantasy', 'Fiction', 'Classico'];

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
    this.filteredBooks = [...this.books];
  }

  filterBooks(): void {
    this.filteredBooks = this.books.filter(book =>
      (book.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
       book.author.toLowerCase().includes(this.searchQuery.toLowerCase())) &&
      (this.selectedGenre ? book.genre === this.selectedGenre : true)
    );
  }

  goToDetails(id: string): void {
    this.router.navigate(['/dettagli', id]);
  }
}
