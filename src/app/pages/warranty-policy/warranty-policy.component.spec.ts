import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrantyPolicyComponent } from './warranty-policy.component';

describe('WarrantyPolicyComponent', () => {
  let component: WarrantyPolicyComponent;
  let fixture: ComponentFixture<WarrantyPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarrantyPolicyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarrantyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
