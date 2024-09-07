import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaItemComponent } from './tarea-item.component';

describe('TareaItemComponent', () => {
  let component: TareaItemComponent;
  let fixture: ComponentFixture<TareaItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TareaItemComponent]
    });
    fixture = TestBed.createComponent(TareaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
