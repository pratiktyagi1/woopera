import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LibrettosPage } from './librettos.page';

describe('LibrettosPage', () => {
  let component: LibrettosPage;
  let fixture: ComponentFixture<LibrettosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrettosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LibrettosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
