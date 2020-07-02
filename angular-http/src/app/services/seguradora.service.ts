import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Seguradora } from '../models/seguradora';

@Injectable({
  providedIn: 'root'
})
export class  SeguradoraService {

  url = 'http://127.0.0.1:8000/api/seguradora/'; // api rest backend

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todos as seguradoras cadastradas
  getSeg(): Observable<Seguradora[]> {
    return this.httpClient.get<Seguradora[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Obtem um seguradora pelo id
  getSegById(id: number): Observable<Seguradora> {
    return this.httpClient.get<Seguradora>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // salva uma seguradora
  saveSeg(seguradora: Seguradora): Observable<Seguradora> {
    return this.httpClient.post<Seguradora>(this.url, JSON.stringify(seguradora), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // utualiza uma seguradora
  updateSeg(seguradora: Seguradora): Observable<Seguradora> {
    return this.httpClient.put<Seguradora>(this.url + '/' + seguradora.id, JSON.stringify(seguradora), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // deleta uma seguradora
  deleteSeg(seguradora: Seguradora) {
    return this.httpClient.delete<Seguradora>(this.url + seguradora.id, this.httpOptions)
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
