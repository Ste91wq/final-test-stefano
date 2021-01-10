import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

import { Joke } from 'src/app/shared/model/joke';
import { JokeService } from 'src/app/shared/services/joke.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-fetch-joke',
  templateUrl: './fetch-joke.component.html',
  styleUrls: ['./fetch-joke.component.css'],
})
export class FetchJokeComponent implements OnInit, OnDestroy {
  joke: Joke;
  _fetchTime = 30;

  initialSubscription: Subscription;
  jokeSubscription: Subscription;

  constructor(private jokeService: JokeService) {}

  ngOnInit(): void {
    this.initialSubscription = this.jokeService.getRandomJoke().subscribe(joke => this.joke = joke);
    this.jokeSubscription = this.getJokeSubscription(this._fetchTime)
  }

  ngOnDestroy(): void {
    this.initialSubscription.unsubscribe();
    this.jokeUnsuscribe();
  }

  get fetchTime(): number {
    return this._fetchTime;
  }

  set fetchTime(time: number) {
    this._fetchTime = time;
    this.jokeUnsuscribe();
    this.jokeSubscription = this.getJokeSubscription(time);
  }

  private getJokeSubscription(time: number): Subscription {
    return interval(time * 1000).pipe(
      switchMap(() => this.jokeService.getRandomJoke())
    ).subscribe(joke => this.joke = joke);
  }

  private jokeUnsuscribe(): void {
    if (this.jokeSubscription) {
      this.jokeSubscription.unsubscribe();
    }
  }
}
