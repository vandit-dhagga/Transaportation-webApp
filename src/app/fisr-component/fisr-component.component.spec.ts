import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FisrComponentComponent } from './fisr-component.component';

describe('FisrComponentComponent', () => {
  let component: FisrComponentComponent;
  let fixture: ComponentFixture<FisrComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FisrComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FisrComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
