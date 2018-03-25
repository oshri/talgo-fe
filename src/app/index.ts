import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';

// Modules
import { TalGoRoutingModule } from './routing.module';
import { TgCommonModule } from './modules/common';
import { LoadingModule } from './modules/loading';
import { AngularFireModule } from 'angularfire2';

// Components
import { TalGoComponent } from './components/talgo/talgo.component';
import { TgHeaderComponent } from './components/header/header.component';
import { TgLoginComponent } from './components/login/login.component';
import { TgUserComponent } from './components/user/user.component';
@NgModule({
  declarations: [
    TalGoComponent,
    TgHeaderComponent,
    TgLoginComponent,
    TgUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    TgCommonModule,
    TalGoRoutingModule,
    LoadingModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [TalGoComponent]
})
export class TalGoModule {}
