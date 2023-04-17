import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapabilityConfigurationComponent } from './capability-configuration.component';

describe('CapabilityConfigurationComponent', () => {
  let component: CapabilityConfigurationComponent;
  let fixture: ComponentFixture<CapabilityConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapabilityConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapabilityConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
