import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppareillComponent } from './appareill.component';

describe('AppareillComponent', () => {
  let component: AppareillComponent;
  let fixture: ComponentFixture<AppareillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppareillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppareillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
