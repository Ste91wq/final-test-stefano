import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchJokeComponent } from './fetch-joke.component';

describe('FetchJokeComponent', () => {
  let component: FetchJokeComponent;
  let fixture: ComponentFixture<FetchJokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchJokeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
