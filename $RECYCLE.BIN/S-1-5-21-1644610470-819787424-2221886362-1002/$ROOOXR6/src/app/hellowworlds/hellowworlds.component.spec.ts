import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HellowworldsComponent } from './hellowworlds.component';

describe('HellowworldsComponent', () => {
  let component: HellowworldsComponent;
  let fixture: ComponentFixture<HellowworldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HellowworldsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HellowworldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
