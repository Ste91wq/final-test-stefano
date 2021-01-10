import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { CardContainerType } from 'src/app/shared/enum/enums';
import { Joke } from 'src/app/shared/model/joke';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mat-card-joke',
  templateUrl: './mat-card-joke.component.html',
  styleUrls: ['./mat-card-joke.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatCardJokeComponent implements OnInit {

  @Input() cardTitle: string;
  @Input() jokes$: Observable<Array<Joke>>;
  @Input() containerType: CardContainerType;

  @Output() liked = new EventEmitter<Joke>();
  @Output() disliked = new EventEmitter<Joke>();
  @Output() archived = new EventEmitter<Joke>();
  @Output() deleted = new EventEmitter<Joke>();

  CardContainerType = CardContainerType;

  constructor() { }

  ngOnInit(): void {
  }

  like(joke: Joke): void {
    this.liked.emit(joke);
  }

  dislike(joke: Joke): void {
    this.disliked.emit(joke);
  }

  archive(joke: Joke): void {
    this.archived.emit(joke);
  }

  delete(joke: Joke): void {
    this.deleted.emit(joke);
  }

}
