import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMarkdown } from './ng-markdown';

describe('NgMarkdown', () => {
  let component: NgMarkdown;
  let fixture: ComponentFixture<NgMarkdown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgMarkdown]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgMarkdown);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
