import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Components
import { TgMarketAuthComponent } from './components/marketAuth/marketAuth.component';

const COMPONENTS = [TgMarketAuthComponent];

// Services
import { MarketsAuth } from './services/marketAuth/marketAuth.service';
import { AuthSrv } from './services/auth/auth.service';

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    RouterModule
  ],
  providers: [MarketsAuth, AuthSrv],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TgCommonModule {}
