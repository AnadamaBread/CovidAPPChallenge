import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccSetupPage } from './acc-setup.page';

describe('AccSetupPage', () => {
  let component: AccSetupPage;
  let fixture: ComponentFixture<AccSetupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccSetupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccSetupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
