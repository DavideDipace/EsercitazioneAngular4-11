import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliLibro } from './dettagli-libro';

describe('DettagliLibro', () => {
  let component: DettagliLibro;
  let fixture: ComponentFixture<DettagliLibro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DettagliLibro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DettagliLibro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
