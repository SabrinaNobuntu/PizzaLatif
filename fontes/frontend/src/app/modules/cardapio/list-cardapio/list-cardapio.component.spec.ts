import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCardapioComponent } from './list-cardapio.component';

describe('ListCardapioComponent', () => {
  let component: ListCardapioComponent;
  let fixture: ComponentFixture<ListCardapioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCardapioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCardapioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
