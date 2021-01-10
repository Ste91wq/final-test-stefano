import { JokeStatus } from "../enum/enums";

export class Joke {
  constructor(
    private _id: number,
    private _joke: string,
    private _categories: Array<string>,
    private _status = JokeStatus.UNASSIGNED
  ) {}

  get status(): JokeStatus {
    return this._status;
  }

  set status(value: JokeStatus) {
    this._status = value
  }

  get id(): number {
    return this._id;
  }

  get joke(): string {
    return this._joke;
  }

  get categories(): Array<string> {
    return this._categories;
  }
}

