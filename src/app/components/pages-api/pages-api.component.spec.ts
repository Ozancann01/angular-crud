import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesApiComponent } from './pages-api.component';

describe('PagesApiComponent', () => {
  let component: PagesApiComponent;
  let fixture: ComponentFixture<PagesApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
