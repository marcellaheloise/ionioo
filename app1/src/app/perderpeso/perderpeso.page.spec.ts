import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerderpesoPage } from './perderpeso.page';

describe('PerderpesoPage', () => {
  let component: PerderpesoPage;
  let fixture: ComponentFixture<PerderpesoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerderpesoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
