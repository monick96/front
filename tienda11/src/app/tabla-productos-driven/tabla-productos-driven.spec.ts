import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaProductosDriven } from './tabla-productos-driven';

describe('TablaProductosDriven', () => {
  let component: TablaProductosDriven;
  let fixture: ComponentFixture<TablaProductosDriven>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaProductosDriven]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaProductosDriven);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
