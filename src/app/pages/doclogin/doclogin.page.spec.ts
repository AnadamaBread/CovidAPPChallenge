import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DocloginPage } from './doclogin.page';

describe('DocloginPage', () => {
  let component: DocloginPage;
  let fixture: ComponentFixture<DocloginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocloginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DocloginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
