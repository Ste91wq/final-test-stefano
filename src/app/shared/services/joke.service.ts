import { HttpClient } from '@angular/common/http';
import { IJoke } from 'src/app/shared/model/joke';
import { IJokedResponse } from './../model/joke';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private http: HttpClient) { }

  getJokes(): Observable<IJoke> {
    return this.http.get<IJokedResponse>(environment.apiChuckNorrisJokes).pipe(
      map((result) => {
        return {
          id: result.value.id,
          joke: result.value.joke
        }
      })
    )
  }
}
