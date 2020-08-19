import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewlogPage } from './newlog.page';

describe('NewlogPage', () => {
  let component: NewlogPage;
  let fixture: ComponentFixture<NewlogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewlogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewlogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
