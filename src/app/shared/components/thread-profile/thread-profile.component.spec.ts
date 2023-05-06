import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadProfileComponent } from './thread-profile.component';

describe('ThreadProfileComponent', () => {
  let component: ThreadProfileComponent;
  let fixture: ComponentFixture<ThreadProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreadProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreadProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
