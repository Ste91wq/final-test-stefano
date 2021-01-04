import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DslikedJokesComponent } from './dsliked-jokes.component';

describe('DslikedJokesComponent', () => {
  let component: DslikedJokesComponent;
  let fixture: ComponentFixture<DslikedJokesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DslikedJokesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DslikedJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
