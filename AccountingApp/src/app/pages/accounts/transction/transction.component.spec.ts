import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransctionComponent } from './transction.component';

describe('TransctionComponent', () => {
  let component: TransctionComponent;
  let fixture: ComponentFixture<TransctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransctionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
