import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderBestBooksComponent } from './slider-best-books.component';

describe('SliderBestBooksComponent', () => {
  let component: SliderBestBooksComponent;
  let fixture: ComponentFixture<SliderBestBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderBestBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderBestBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
