import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StagiairesComponent } from './stagiaires.component';

describe('StagiairesComponent', () => {
  let component: StagiairesComponent;
  let fixture: ComponentFixture<StagiairesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StagiairesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StagiairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
