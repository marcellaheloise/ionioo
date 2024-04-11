import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GanharpesoPage } from './ganharpeso.page';

describe('GanharpesoPage', () => {
  let component: GanharpesoPage;
  let fixture: ComponentFixture<GanharpesoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GanharpesoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
