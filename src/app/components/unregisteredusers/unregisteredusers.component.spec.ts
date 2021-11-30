import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { UserRepository } from 'src/app/services/user-repository';

import { UnregisteredusersComponent } from './unregisteredusers.component';

describe('UnregisteredusersComponent', () => {
  let component: UnregisteredusersComponent;
  let fixture: ComponentFixture<UnregisteredusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        AppModule,

      ],
      declarations: [ UnregisteredusersComponent ],
      providers: [ UserRepository ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnregisteredusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
