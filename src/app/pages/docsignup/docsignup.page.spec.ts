import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DocsignupPage } from './docsignup.page';

describe('DocsignupPage', () => {
  let component: DocsignupPage;
  let fixture: ComponentFixture<DocsignupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocsignupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DocsignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
