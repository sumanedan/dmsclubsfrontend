import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopupbluePage } from './popupblue.page';

describe('PopupbluePage', () => {
  let component: PopupbluePage;
  let fixture: ComponentFixture<PopupbluePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupbluePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopupbluePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
