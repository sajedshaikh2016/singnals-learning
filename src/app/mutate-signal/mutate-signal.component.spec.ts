import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutateSignalComponent } from './mutate-signal.component';

describe('MutateSignalComponent', () => {
  let component: MutateSignalComponent;
  let fixture: ComponentFixture<MutateSignalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MutateSignalComponent]
    });
    fixture = TestBed.createComponent(MutateSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
