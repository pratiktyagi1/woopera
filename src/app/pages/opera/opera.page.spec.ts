import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OperaPage } from './opera.page';

describe('OperaPage', () => {
  let component: OperaPage;
  let fixture: ComponentFixture<OperaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OperaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
