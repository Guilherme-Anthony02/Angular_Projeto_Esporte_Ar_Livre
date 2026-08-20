import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Corrida } from '../models/Corrida';

@Injectable({
  providedIn: 'root',
})
export class CorridaService {
  constructor(private http: HttpClient) { }

  salvarCorrida(corrida: Corrida): Observable<Corrida> {
    const urlAPi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida`;

    return this.http.post<Corrida>(urlAPi, corrida);
  }

  listarCorridas(): Observable<Corrida[]> {
    const urlAPi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida`;

    return this.http.get<Corrida[]>(urlAPi);
  }

  listarCorrida(idCorrida: Number): Observable<Corrida> {
    const urlAPi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/${idCorrida}`;

    return this.http.get<Corrida>(urlAPi);
  }

  excluirCorrida(idCorrida: Number): Observable<Corrida> {
    const urlAPi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/${idCorrida}`;

    return this.http.delete<Corrida>(urlAPi);
  }

  alterarCorrida(corrida: Corrida): Observable<Corrida> {
    const urlAPi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/${corrida.id}`;

    return this.http.put<Corrida>(urlAPi, corrida);
  }
}