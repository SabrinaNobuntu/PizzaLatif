import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEntregaComponent } from './list-entrega.component';

describe('ListEntregaComponent', () => {
  let component: ListEntregaComponent;
  let fixture: ComponentFixture<ListEntregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListEntregaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
