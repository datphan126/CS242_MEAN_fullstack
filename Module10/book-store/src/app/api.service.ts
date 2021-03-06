import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BACKEND_SERVER_IP = 'localhost';
  private BACKEND_SERVER_PORT = '8080';
  private ADD_NEW_BOOK_API = 'http://' + this.BACKEND_SERVER_IP + ':' + this.BACKEND_SERVER_PORT + '/book';
  private ADD_NEW_BIRTHDAY_CARD_API = 'http://' + this.BACKEND_SERVER_IP + ':' + this.BACKEND_SERVER_PORT + '/birthdayCard';
  private FETCH_BOOKS_API = 'http://' + this.BACKEND_SERVER_IP + ':' + this.BACKEND_SERVER_PORT + '/books';
  private FETCH_BIRTHDAY_CARDS_API = 'http://' + this.BACKEND_SERVER_IP + ':' + this.BACKEND_SERVER_PORT + '/birthdayCards';
  private FECTH_BOOK_API = 'http://' + this.BACKEND_SERVER_IP + ':' + this.BACKEND_SERVER_PORT + '/book';
  private UPDATE_BOOK_API = this.ADD_NEW_BOOK_API;
  private DELETE_BOOK_API = this.ADD_NEW_BOOK_API;

  constructor(private httpClient: HttpClient) { }

  // Book APIS
  fetchBook(id: string) {
    return this.httpClient.get(`${this.FECTH_BOOK_API}/${id}`);
  }

  fetchBooks() {
    return this.httpClient.get(this.FETCH_BOOKS_API);
  }

  addOrUpdateBook(
    book: { title: string, isbn: string, author: string; picture: string, price: number, _id: null | string }) {
    if (!book._id || book._id === '') return this.httpClient.post(this.ADD_NEW_BOOK_API, book);
    return this.httpClient.put(this.UPDATE_BOOK_API, book);
  }

  deleteBook(id: string) {
    return this.httpClient.delete(`${this.DELETE_BOOK_API}/${id}`);
  }

  // Birthday Card APIs
  addNewBirthdayCard(card: { title: string, material: string, picture: string, price: number }) {
    return this.httpClient.post(this.ADD_NEW_BIRTHDAY_CARD_API, card);
  }

  fetchBirthdayCards() {
    return this.httpClient.get(this.FETCH_BIRTHDAY_CARDS_API);
  }
}
