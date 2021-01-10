import { Component, OnInit } from '@angular/core';

import { CardContainerType } from 'src/app/shared/enum/enums';
import { Joke } from 'src/app/shared/model/joke';
import { JokeService } from 'src/app/shared/services/joke.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  CardContainerType = CardContainerType;

  likedJokes$: Observable<Joke[]>;
  dislikedJokes$: Observable<Joke[]>;
  archivedJokes$: Observable<Joke[]>;

  constructor(private jokeService: JokeService) { }

  ngOnInit(): void {
    this.likedJokes$ = this.jokeService.getAllLikedJokes();
    this.dislikedJokes$ = this.jokeService.getAllDisLikedJokes();
    this.archivedJokes$ = this.jokeService.getAllArchivedJokes();
  }

  onJokeLiked(joke: Joke): void {
    this.jokeService.likeJoke(joke);
  }

  onJokeDisliked(joke: Joke): void {
    this.jokeService.dislikeJoke(joke);
  }

  onJokeArchived(joke: Joke): void {
    this.jokeService.archive(joke);
  }

  onJokeDelete(joke: Joke): void {
    this.jokeService.delete(joke);
  }

}
