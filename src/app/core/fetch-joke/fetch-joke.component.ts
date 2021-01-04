import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators'

import { JokeService } from 'src/app/shared/services/joke.service';

@Component({
  selector: 'app-fetch-joke',
  templateUrl: './fetch-joke.component.html',
  styleUrls: ['./fetch-joke.component.css']
})
export class FetchJokeComponent implements OnInit {
  joke$: Observable<any>;

  constructor(private jokeService: JokeService) { }

  ngOnInit(): void {
    this.getJoke(30)
    this.joke$.subscribe((joke) => console.log(joke));
  }

  getJoke(int: number): void{
    this.joke$ = timer(0, int * 1000).pipe(
      mergeMap(() => this.jokeService.getJokes().pipe(
        map(val => val.value.joke)
      ))
    )
  }

}
