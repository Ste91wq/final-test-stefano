import { catchError, map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Joke } from 'src/app/shared/model/joke';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

class JokeResponse {
  constructor(public type: string, public value: Joke) {}
}

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  constructor(private http: HttpClient) {}

  getRandomJoke(): Observable<Joke> {
    return this.http.get<JokeResponse>(environment.apiChuckNorrisJokes).pipe(
      map((jokeResponse: JokeResponse) => jokeResponse.value),
      map((r) => new Joke(r.id, r.joke, r.categories)),
      catchError((error) => {
        console.error(`An error has occurred: `, error);
        throw new Error(error);
      })
    );
  }
}
