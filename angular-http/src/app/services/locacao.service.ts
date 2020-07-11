import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Locacao } from "src/app/models/locacao";
import { Usuario } from '../models/usuario';
import { Car } from '../models/car';
import { Seguradora } from "../models/seguradora";


@Injectable({
  providedIn: 'root'
})

export class LocacaoService {

  url = 'http://127.0.0.1:8000/api/locacao/'; // api rest backend
  url_clientes = 'http://127.0.0.1:8000/api/clienteNames/';
  url_veiculos = 'http://127.0.0.1:8000/api/carNames/';
  url_seguradora = 'http://127.0.0.1:8000/api/segNames/';


  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todos as Locações
  getLoc(): Observable<Locacao[]> {
    return this.httpClient.get<Locacao[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  getClienteNames(): Observable<Usuario[]> { 
    return this.httpClient.get<Usuario[]>(this.url_clientes)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  getCarNames(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.url_veiculos)
    .pipe(
      retry(2),
      catchError(this.handleError))
  }

  getSegNames(): Observable<Seguradora[]> {
    return this.httpClient.get<Seguradora[]>(this.url_seguradora)
    .pipe(
      retry(2),
      catchError(this.handleError))
  }

  // Obtem uma locação pelo id
  getLocById(id: number): Observable<Locacao> {
    return this.httpClient.get<Locacao>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // salva uma locacao
  saveLoc(locacao: Locacao): Observable<Locacao> {
    return this.httpClient.post<Locacao>(this.url, JSON.stringify(locacao), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // utualiza uma seguradora
  updateLoc(locacao: Locacao): Observable<Locacao> {
    return this.httpClient.put<Locacao>(this.url + locacao.id + '/', JSON.stringify(locacao), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // deleta uma seguradora
  deleteLoc(locacao: Locacao) {
    return this.httpClient.delete<Locacao>(this.url + locacao.id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}
