import * as _ from 'lodash';

import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Joke } from 'src/app/shared/model/joke';
import { JokeStatus } from '../enum/enums';
import { environment } from 'src/environments/environment';

class JokeResponse {
  constructor(public type: string, public value: Joke) {}
}

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  // tslint:disable-next-line: variable-name
  _jokes$ = new BehaviorSubject<Array<Joke>>([]);
  jokes: Array<Joke> = [];

  private readonly FILTER_IS_LIKED = (joke: Joke) =>
    joke.status === JokeStatus.LIKED;
  private readonly FILTER_IS_DISLIKED = (joke: Joke) =>
    joke.status === JokeStatus.DISLIKED;
  private readonly FILTER_IS_ARCHIVED = (joke: Joke) =>
    joke.status === JokeStatus.ARCHIVED;

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

  likeJoke(joke: Joke): void {
    const found = this.jokes.find((j) => j.id === joke.id);
    if (found) {
      found.status = JokeStatus.LIKED;
    } else {
      joke.status = JokeStatus.LIKED;
      this.jokes.push(joke);
    }
    this.dispatchJokes();
  }

  dislikeJoke(joke: Joke): void {
    const found = this.jokes.find((j) => j.id === joke.id);
    if (found) {
      found.status = JokeStatus.DISLIKED;
    } else {
      joke.status = JokeStatus.DISLIKED;
      this.jokes.push(joke);
    }
    this.dispatchJokes();
  }

  archive(joke: Joke): void {
    const found = this.jokes.find((j) => j.id === joke.id);
    if (found) {
      found.status = JokeStatus.ARCHIVED;
    } else {
      joke.status = JokeStatus.ARCHIVED;
      this.jokes.push(joke);
    }
    this.dispatchJokes();
  }

  delete(joke: Joke): void {
    _.remove(this.jokes, j => j.id === joke.id);
    this.dispatchJokes();
  }

  getAllLikedJokes(): Observable<Joke[]> {
    return this.getJokesBasedOnFilter(this.FILTER_IS_LIKED);
  }

  getAllDisLikedJokes(): Observable<Joke[]> {
    return this.getJokesBasedOnFilter(this.FILTER_IS_DISLIKED);
  }

  getAllArchivedJokes(): Observable<Joke[]> {
    return this.getJokesBasedOnFilter(this.FILTER_IS_ARCHIVED);
  }

  private dispatchJokes(): void {
    this._jokes$.next(this.jokes);
  }

  private getJokesBasedOnFilter(
    filterFn: (joke) => boolean
  ): Observable<Joke[]> {
    return this._jokes$
      .asObservable()
      .pipe(map((jokes) => jokes.filter(filterFn)));
  }
}
