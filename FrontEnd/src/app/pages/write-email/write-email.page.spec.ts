import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WriteEmailPage } from './write-email.page';

describe('WriteEmailPage', () => {
  let component: WriteEmailPage;
  let fixture: ComponentFixture<WriteEmailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WriteEmailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
