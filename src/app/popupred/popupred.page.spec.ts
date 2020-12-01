import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopupredPage } from './popupred.page';

describe('PopupredPage', () => {
  let component: PopupredPage;
  let fixture: ComponentFixture<PopupredPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupredPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopupredPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
