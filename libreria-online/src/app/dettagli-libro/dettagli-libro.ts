import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book, BookService } from '../services/book';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dettagli-libro',
  imports: [CommonModule, FormsModule],
  templateUrl: './dettagli-libro.html',
  styleUrls: ['./dettagli-libro.css']
})
export class DettagliLibroComponent implements OnInit {
  book?: Book;

  constructor(private route: ActivatedRoute, private router: Router, private bookService: BookService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) this.book = this.bookService.getBookById(id);
  }

  tornaCatalogo(): void {
    this.router.navigate(['/catalogo']);
  }
}
