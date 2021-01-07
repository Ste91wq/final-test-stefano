import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCardJokeComponent } from './mat-card-joke.component';

describe('MatCardJokeComponent', () => {
  let component: MatCardJokeComponent;
  let fixture: ComponentFixture<MatCardJokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatCardJokeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatCardJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
